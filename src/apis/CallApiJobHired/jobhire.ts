import { useMutation, useQuery } from "@tanstack/react-query";
import { PAGE_SIZE } from "../../constants";
import {  Status } from "../../types/user";
import { JobHiredPagination } from "../../types/job";
import apiClient from '../apiUtils'
import { message } from "antd";
export const useGetLisJobHired = (currentPage: number) => {
    return useQuery({
      queryKey: ["JobHiredPagination",{ currentPage }],
      queryFn: async () => {
        try {
          const response = await apiClient.get<Status<JobHiredPagination>>({ url: `/thue-cong-viec/phan-trang-tim-kiem?pageIndex=${currentPage}&pageSize=${PAGE_SIZE}` });
          return response.content;
        } catch (error) {
          throw new Error("Error occurred while fetching user list.");
        }
      },
    });
  };

  export const usePostJobHired = (payload?:any)=>{
      return useMutation({
        mutationFn:async(value:any)=>{
           try{
               return await apiClient.post({
                url:"/thue-cong-viec",
                params:payload,
                data:value,
               })
           }catch(error:any){
            throw Error(error)
           }
           
         
        },
        onSuccess:()=>{
          message.success("You have made a successful payment")
        }
      })
  }