import { RouterProvider } from "react-router-dom";
import UserRoutes from "./routes/UserRoutes";
import "./index.css";
import "./App.css";
import { useHookstate } from "@hookstate/core";
import Auth from "./store/auth";
import { useEffect } from "react";
function App() {
  const AuthState = useHookstate(Auth.state);
  useEffect(() => {
    const token = AuthState.token.get();
    if (token) {
      Auth.decodeJWT();
    }
  }, [AuthState.token]);
  return (
    <>
      <RouterProvider router={UserRoutes()} />
    </>
  );
}

export default App;
