/* eslint-disable no-param-reassign */

import axios from 'axios';

const baseApiConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_URL || '',
  withCredentials: false
};
const baseApiClient = axios.create(baseApiConfig);

baseApiClient.interceptors.request.use(
  (config: any) => {
    const accessToken = '';
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  (error) => Promise.reject(error)
);

baseApiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
    }
    return Promise.reject(error);
  }
);

export interface IRequestOptions {
  url: string;
  method: Method;
  params?: string;
  data?: object;
  header?: object;
  messageError?: string;
  messageSuccess?: string;
}

export type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export const request = async <TResponse = any>(requestOptions: IRequestOptions) => {
  try {
    const response = await baseApiClient<TResponse>(requestOptions);
    return Promise.resolve(response.data);
  } catch (e: any) {
    return Promise.reject(e);
  }
};
