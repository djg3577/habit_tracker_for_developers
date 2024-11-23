import { hookstate } from "@hookstate/core";
import User from "./user";
import auth from "@/services/auth";

const getToken = () => {
  return localStorage.getItem("token") || localStorage.getItem("githubToken");
};

const getTokenType = () => {
  return localStorage.getItem("tokenType") || "jwt";
};

const setToken = (token: string, type = "jwt") => {
  if (type == "github") {
    localStorage.setItem("githubToken", token);
  } else {
    localStorage.setItem("token", token);
    localStorage.setItem("tokenType", "jwt");
  }
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

async function loginWithGithub(code: string) {
  const { data } = await auth.loginWithGithub(code);
  setToken(data.token, "github");
  state.token.set(data.token);
  state.tokenType.set("github");
  User.state.token.set(data.token);
  User.state.tokenType.set("github");
  User.state.user.set(data.user);
}

const Auth = {
  state,
  decodeJWT,
  loginWithGithub,
};

export default Auth;
