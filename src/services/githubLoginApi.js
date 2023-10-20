import api from './externalApi';
import backEnd from './api';

const client_id = import.meta.env.VITE_CLIENT_ID;

export async function getGithubCode() {
    const response = await api.get(`https://github.com/login/oauth/authorize&client_id=${client_id}`);
    return response.data;
}

export async function signInGithub(code) {
    const response = await backEnd.post('/auth/github/sign-in', { code });
    return response.data;
}
