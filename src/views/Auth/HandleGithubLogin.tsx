import Auth from "@/store/auth";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function HandleGitHubLogin() {
  const { search } = useLocation();
  const urlParams = new URLSearchParams(search);
  const code = urlParams.get("code");

  const fetchGithubToken = async (code: string) => {
    try {
      await Auth.loginWithGithub(code);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (code) fetchGithubToken(code);
  }, []);

  return <></>;
}
