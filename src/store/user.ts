import { hookstate } from "@hookstate/core";
import { User as UserType } from "@/interfaces/User/user";

export const initialStore = {
  token: window.localStorage.getItem("token") || "",
  user: {} as UserType,
  tokenType: "",
};

const state = hookstate(initialStore);

const User = {
  state,
};

export default User;
