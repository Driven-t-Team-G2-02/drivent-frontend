import useAsync from '../useAsync';

import * as githubApi from '../../services/githubLoginApi';

export default function useGithubGetCode() {
  const {
    loading: githubGetCodeLoading,
    error: githubGetCodeError,
    act: githubGetCode
  } = useAsync(githubApi.getGithubCode, false);

  return {
    githubGetCodeLoading,
    githubGetCodeError,
    githubGetCode
  };
}
