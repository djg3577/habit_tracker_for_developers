import React from "react";
import { RouterProvider } from "react-router-dom";
import UserRoutes from "./src/routes/UserRoutes";
function App() {
  return (
    <>
      <RouterProvider router={UserRoutes()} />
    </>
  );
}

export default App;
