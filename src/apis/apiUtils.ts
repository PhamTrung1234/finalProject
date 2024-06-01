import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { Result } from "../types/api";
import { StorageEnum } from "../types/enum";
import { getItem } from "../utils/storage";
import { UserToken } from "../types/entity";

const axiosInstance=axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API as string,
    timeout: 50000,
    headers: {tokenCybersoft : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2MiIsIkhldEhhblN0cmluZyI6IjE3LzEwLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcyOTEyMzIwMDAwMCIsIm5iZiI6MTcwMDE1NDAwMCwiZXhwIjoxNzI5MjcwODAwfQ.xKQVYYnO9233wkXRw5oU4Dtx41flqDuUnA0DbkDYRmM'},
})
axiosInstance.interceptors.request.use(
    (config)=>{
        const accessToken=getItem(StorageEnum.Token) as unknown as UserToken;
        if(accessToken){
            config.headers.Authorization= `Bearer ${accessToken.accessToken}`
        }
        return config;
    },
    (error)=>{
        return Promise.reject(error);
    }
)
class apiClient{
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

export default new apiClient();