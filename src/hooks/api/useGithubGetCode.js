import * as githubApi from '../../services/githubLoginApi';

export default function useGithubGetCode() {
  const client_id = import.meta.env.VITE_CLIENT_ID;
  const client_secret = import.meta.env.VITE_GITHUB_CLIENT_SECRET;
  let githubGetCodeLoading = false;

  const githubGetCode = () => {
    window.location.assign(`https://github.com/login/oauth/authorize
                              &client_id=${client_id}
                              &client_secret=${client_secret}
                              &scope=user
                              &callback_url=http://localhost:5173/sign-in`)
  }

  return {
    githubGetCodeLoading,
    githubGetCode
  };
}
