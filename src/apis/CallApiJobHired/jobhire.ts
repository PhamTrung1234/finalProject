import { useMutation, useQuery } from "@tanstack/react-query";
import { PAGE_SIZE } from "../../constants";
import {  Status } from "../../types/user";
import { JobHiredPagination } from "../../types/job";
import apiClient from '../apiUtils'
import { message } from "antd";
import { queryClient } from "../../http/tanstack/react-query";
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
          queryClient.refetchQueries({ queryKey: ['JobHired'] })
        }
      })
  }

  export const useGetJobHired = (id:number|string) => {
    return useQuery({
      queryKey: ["JobHired",{id}],
      queryFn: async () => {
        try {
          const response = await apiClient.get({ url: '/thue-cong-viec/lay-danh-sach-da-thue' });
          return response.content;
        } catch (error) {
          throw new Error("Error occurred while fetching user list.");
        }
      },
    });
  };
  export const useUpdateJobHired=()=>{
    return useMutation({
   mutationFn: async (values: any) => 
     apiClient.post({ url: `/thue-cong-viec/hoan-thanh-cong-viec/${values}` }),
   onSuccess: () => {
     queryClient.invalidateQueries({ queryKey: ['JobHired'] });
     message.success('Congratulation!')
   }
 });
   
 };

 export const useDeleteJobHired=()=>{
  return useMutation({
 mutationFn: async (values: any) => 
   apiClient.delete({ url: `/thue-cong-viec/${values}` }),
 onSuccess: () => {
   queryClient.invalidateQueries({ queryKey: ['JobHired'] });
   message.success('Xóa thành công')
   
 }
});
 
};