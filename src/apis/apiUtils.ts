import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { Result } from "../types/api";

const axiosInstance=axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API as string,
    timeout: 50000,
    headers: {},
})

class apiClient{
    get<T =any>(config: AxiosRequestConfig):Promise<T>{
        return this.request({...config,method: "GET"});
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