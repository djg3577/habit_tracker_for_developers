import axios from "./axios";

export default {
  decodeJWT() {
    return axios.post("/auth/decode-jwt");
  },
  loginWithGithub(code: string) {
    return axios.post("/auth/github", { code });
  },
};
