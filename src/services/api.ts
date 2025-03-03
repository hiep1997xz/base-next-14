/* eslint-disable no-constant-condition */

import { logout } from '@/utils/helppers';
import { showErrorNotification } from '@/utils/notification';
import Axios from 'axios';

const axiosInstance = Axios.create({
  timeout: 3 * 60 * 1000,
  baseURL: process.env.REACT_APP_API_DOMAIN,
  withCredentials: true
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: any) => {
    if (error?.response?.status === 401) {
      if (error?.response?.config?.url !== '/api/auth/login') {
        logout({ code: 401, message: 'errorf' });
      }

      return Promise.reject(error);
    }
    if (error?.response?.status !== 302 && error?.response?.data?.code !== 'UNAUTHORIZED') {
      return Promise.reject(error);
    }
    if (
      error?.response?.data?.code === 'UNAUTHORIZED' ||
      error.response?.data?.code === 'PERMISSION_DENIED'
    ) {
      logout();
    }
    if (error?.response?.status === 302) {
      showErrorNotification({
        message: 'error'
      });
      return Promise.reject(error);
    }
    if (error?.response?.status === 502) {
      showErrorNotification({
        message: 'error'
      });
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

export const sendGet = (url: string, params?: any) =>
  axiosInstance.get(url, { params }).then((res) => res.data);
export const sendPost = (url: string, params?: any, queryParams?: any) =>
  axiosInstance.post(url, params, { params: queryParams }).then((res) => res.data);
export const sendPut = (url: string, params?: any) =>
  axiosInstance.put(url, params).then((res) => res.data);
export const sendPatch = (url: string, params?: any) =>
  axiosInstance.patch(url, params).then((res) => res.data);
export const sendDelete = (url: string, params?: any) =>
  axiosInstance.delete(url, { params }).then((res) => res.data);

export const sendDeleteWithBody = (url: string, payload?: any) =>
  axiosInstance.delete(url, { data: payload }).then((res: any) => res);
