import axios from "axios";

export default {
  decodeJWT() {
    return axios.post("/auth/decode-jwt");
  },
};
