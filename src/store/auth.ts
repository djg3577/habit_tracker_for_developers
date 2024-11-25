import { hookstate } from "@hookstate/core";
import User from "./user";
import auth from "@/services/auth";

const getToken = () => {
  return localStorage.getItem("token") || localStorage.getItem("githubToken");
};

const getTokenType = () => {
  return localStorage.getItem("tokenType") || "jwt";
};

export const clearToken = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("githubToken");
  localStorage.removeItem("tokenType");
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
  const {
    data: {
      response: [token, user],
    },
  } = await auth.loginWithGithub(code);
  setToken(token, "github");
  state.token.set(token);
  state.tokenType.set("github");
  User.state.token.set(token);
  User.state.tokenType.set("github");
  User.state.user.set(user);
}

function logout() {
  clearToken();
  state.token.set("");
  User.state.token.set("");
  User.state.tokenType.set("");
  User.state.user.set({
    code: 0,
    id: 0,
    email: "",
    username: "",
  });
}

const Auth = {
  state,
  decodeJWT,
  loginWithGithub,
  logout
};

export default Auth;
