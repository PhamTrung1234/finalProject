import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { Result } from "../types/api";
import { StorageEnum } from "../types/enum";
import { removeItem } from "../utils/storage";

import { message as Message } from 'antd';
const axiosInstance=axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API as string,
    timeout: 50000,
    headers: {TokenCybersoft : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2MiIsIkhldEhhblN0cmluZyI6IjE3LzEwLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcyOTEyMzIwMDAwMCIsIm5iZiI6MTcwMDE1NDAwMCwiZXhwIjoxNzI5MjcwODAwfQ.xKQVYYnO9233wkXRw5oU4Dtx41flqDuUnA0DbkDYRmM'},
})
axiosInstance.interceptors.request.use(
    (config:any) => {
      const userLocal = localStorage.getItem("user");
      const currentUser = userLocal ? JSON.parse(userLocal) : null;
      config.headers = { 
        ...config.headers,
        token: currentUser ? `${currentUser.token}` : "",
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2MiIsIkhldEhhblN0cmluZyI6IjE3LzEwLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcyOTEyMzIwMDAwMCIsIm5iZiI6MTcwMDE1NDAwMCwiZXhwIjoxNzI5MjcwODAwfQ.xKQVYYnO9233wkXRw5oU4Dtx41flqDuUnA0DbkDYRmM",
      };
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  axiosInstance.interceptors.response.use(
    (res: AxiosResponse<any>) => {
        if (!res.data) throw new Error('The interface request failed, please try again later!');
        const { message } = res.data;
        const hasSuccess = res.data && Reflect.has(res, 'status');

        if (hasSuccess) {
            return res.data;
        }
        throw new Error(message || 'The interface request failed, please try again later!');
    },
    async (error: AxiosError<Result>) => {
        let errMsg = '';
        const { response, message } = error || {};
        if (error.response?.status === 401) {
            Message.error('Token Expire! Redirect to Login Page');
            setTimeout(() => {
                removeItem(StorageEnum.Token);
                window.location.hash = '#/login';
                window.location.reload();
            }, 1000);
            return Promise.reject(error);
        }
        try {
            errMsg = response?.data?.message || message;
            Message.error(errMsg);
        } catch (error) {
            throw new Error(error as unknown as string);
        }
        return Promise.reject(error);
    },
);

class APIClient{
    get<T =any>(config: AxiosRequestConfig):Promise<T>{
        return this.request({...config,method: "GET"});
    }
    post<T = any>(config: AxiosRequestConfig): Promise<T> {
        return this.request({ ...config, method: 'POST' });
    }

    put<T = any>(config: AxiosRequestConfig): Promise<T> {
        return this.request({ ...config, method: 'PUT' });
    }

    patch<T = any>(config: AxiosRequestConfig): Promise<T> {
        return this.request({ ...config, method: 'PATCH' });
    }

    delete<T = any>(config: AxiosRequestConfig): Promise<T> {
        return this.request({ ...config, method: 'DELETE' });
    }

    request<T=any>(config:AxiosRequestConfig):Promise<T>{
        return new Promise((resolve,reject)=>{
            axiosInstance
            .request<any, AxiosResponse<Result>>(config)
            .then((res: AxiosResponse<Result>)=>{
                resolve(res as unknown as Promise<T>);
            })
            .catch((e: Error | AxiosError)=>{
                reject(e);
            })
        });
        }
    }

export default new APIClient();


