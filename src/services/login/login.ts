import { sendGet, sendPost } from '../api';

export const login = (params: any) => sendPost(`/api/auth/login`, params);
export const logout = () => sendGet(`/api/auth/logout`);
