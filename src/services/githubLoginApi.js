import api from './externalApi';
import backEnd from './api';

const client_id = import.meta.env.VITE_CLIENT_ID;

export async function getGithubCode() {
    const response = await api.get(`https://github.com/login/oauth/authorize&client_id=${client_id}`);
    return response.data;
}

export async function signInGithub(code) {
    const response = await backEnd.post('/auth/github/sign-in', { code });
    response.headers("Access-Control-Allow-Origin", "*");
    response.headers("Access-Control-Allow-Credentials", "true");
    response.headers("Access-Control-Max-Age", "1800");
    response.headers("Access-Control-Allow-Headers", "content-type");
    response.headers("Access-Control-Allow-Methods","PUT, POST, GET, DELETE, PATCH, OPTIONS");

    return response.data;
}