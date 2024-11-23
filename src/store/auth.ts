import { hookstate } from "@hookstate/core";
import User from "./user";
import auth from "@/services/auth";

const getToken = () => {
  return localStorage.getItem("token") || localStorage.getItem("githubToken");
};

const getTokenType = () => {
  return localStorage.getItem("tokenType") || "jwt";
};

export const initialStore = {
  token: getToken() || "",
  tokenType: getTokenType() || "",
};

const state = hookstate(initialStore);

async function decodeJWT() {
  const { data } = await auth.decodeJWT();
  User.state.user.set(data);
}

const Auth = {
  state,
  decodeJWT,
};

export default Auth;
