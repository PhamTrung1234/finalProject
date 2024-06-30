import { useMutation, useQuery } from "@tanstack/react-query";
import {  PAGE_SIZE_TYPEJOB } from "../../constants";
import { Status } from "../../types/user";
import apiClient from '../apiUtils'
import {  DetailTypeJobPagination, JobTypePagination } from "../../types/job";
import { queryClient } from "../../http/tanstack/react-query";
import { message } from "antd";

//get list type job
export const useGetListJobType = (currentPage: number) => {
    return useQuery({
      queryKey: ["JobTypePagination",{ currentPage }],
      queryFn: async () => {
        try {
          const response = await apiClient.get<Status<JobTypePagination>>({ url: `/loai-cong-viec/phan-trang-tim-kiem?pageIndex=${currentPage}&pageSize=${PAGE_SIZE_TYPEJOB}` });
          return response.content;
        } catch (error) {
          throw new Error("Error occurred while fetching user list.");
        }
      },
    });
  };

  //get detail list type job

  export const useListDetailTypeJob=(currentPage?: number)=>{
    return useQuery({
      queryKey: ["ListDetailTypeJob",{currentPage}],
      queryFn: async () => {
        try {
          const response = await apiClient.get<Status<DetailTypeJobPagination>>({ url: `/chi-tiet-loai-cong-viec/phan-trang-tim-kiem?pageIndex=${currentPage}&pageSize=${PAGE_SIZE_TYPEJOB}` });
          return response.content;
        } catch (error) {
          throw new Error("Error occurred while fetching user list.");
        }
      }
    })
  }

  //create Detail Job
  export const useCreateDetailTypeJob=(onclose:()=>void)=>{
    return useMutation({
   mutationFn: async (values: any) => 
     apiClient.post({ url: '/chi-tiet-loai-cong-viec/them-nhom-chi-tiet-loai', data: values }),
   onSuccess: () => {
     queryClient.invalidateQueries({ queryKey: ['ListDetailTypeJob'] });
     message.success('Tạo thành công')
     onclose();
   }
 });
   
 };

  //get detail job
  export const useDetailTypeJob=()=>{
    return useQuery({
      queryKey: ["DetailTypeJob"],
      queryFn: async () => {
        try {
          const response = await apiClient.get({ url: `/chi-tiet-loai-cong-viec` });
          return response.content;
        } catch (error) {
          throw new Error("Error occurred while fetching user list.");
        }
      },
      
    })
  }

  //update Type Job
  export const useUpdateTypeJob=(onclose:()=>void)=>{
    return useMutation({
   mutationFn: async (values: any) => 
     apiClient.put({ url: `/loai-cong-viec/${values.id}`, data:values }),
   onSuccess: () => {
     queryClient.invalidateQueries({ queryKey: ['JobTypePagination'] });
     message.success('Cập Nhật thành công')
     onclose();
   }
 });
   
 };

  //create type job
  export const useCreateTypeJob=(onclose:()=>void)=>{
     return useMutation({
    mutationFn: async (values: any) => 
      apiClient.post({ url: '/loai-cong-viec', data: values }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['JobTypePagination'] });
      message.success('Tạo thành công')
      onclose();
    }
  });
    
  };

  //delete type job
  export const useDeleteTypeJob=(onclose:()=>void)=>{
    return useMutation({
   mutationFn: async (values: any) => 
     apiClient.delete({ url: `/loai-cong-viec/${values}` }),
   onSuccess: () => {
     queryClient.invalidateQueries({ queryKey: ['JobTypePagination'] });
     message.success('Xóa thành công')
     onclose();
   }
 });
   
 };