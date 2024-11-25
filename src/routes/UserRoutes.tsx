import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Signup from "../views/Signup";
import Home from "../views/Home";
import Activities from "../views/Activities";
import Header from "./header";

function UserRoutes() {
  return createBrowserRouter(
    createRoutesFromElements(
      <Route Component={Header}>
        <Route path="/signUp" Component={Signup} />
        <Route path="/home" Component={Home} />
        <Route path="/activities" Component={Activities} />
        <Route path="*" Component={Home} />
      </Route>
    )
  );
}
export default UserRoutes;
