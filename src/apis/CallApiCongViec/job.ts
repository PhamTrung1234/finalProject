import { useMutation, useQuery } from "@tanstack/react-query"
import { Career, JobPagination } from "../../types/job"
import apiClient from "../apiUtils";
import { Status } from "../../types/user";
import { PAGE_SIZE } from "../../constants";
import { queryClient } from "../../http/tanstack/react-query";
import { message } from "antd";

//get list of job
export const useGetListJob=(currentPage:number)=>{
    return useQuery({
       queryKey: ["JobPagination",{currentPage}],
       queryFn: async ()=>{
            try {
                const response = await apiClient.get<Status<JobPagination>>({url:`/cong-viec/phan-trang-tim-kiem?pageIndex=${currentPage}&pageSize=${PAGE_SIZE}`});
                return response.content;
            } catch (error) { throw "Error occurred while fetching user list."}
        },
    });
}

//add job
export const useAddJob=(currentPage:number, closeModal:()=>void,resetform:()=>void)=>{
    return useMutation({
        mutationFn: async(values:Career)=>{
            try{
                const response = await apiClient.post({url:'/cong-viec',data:values})
                return response
            }catch(error){throw "error"}
        },
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey: ['JobPagination']});
            queryClient.refetchQueries({
                queryKey: ['JobPagination',{currentPage}],
                type: 'active',
            });
            message.success("Job add successfully");
            closeModal()
            resetform();
        }
    })
}

//delete job
export const useDeleteJob=(currentPage:number)=>{
    return useMutation({
        mutationFn: async(values:number)=>{
           try{
            const response =await apiClient.delete({
                url: `/cong-viec/${values}`,
                
            });
            return response;
           }catch(error) {
            throw "lỗi xóa rồi"
           }
            
        },
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['JobPagination'] });
          queryClient.refetchQueries({
            queryKey: ["JobPagination", { currentPage }],
            type: "active",
          });
          message.success("Job Deleted successfully");
        },
        
    })
}

//update Job
export const useUpdateJob=(currentPage:number,onCloseModal:()=>void,resetForm:()=>void)=>{
    return useMutation({
        mutationFn:async({ job, values }: { job: Career, values: number })=>{
          try{
            const response=await apiClient.put({url: `/cong-viec/${values}`,data:job});
            return response;
          }catch(error){throw "Error"}
        },
        onSuccess:()=>{
          queryClient.invalidateQueries({queryKey: ['JobPagination']});
          queryClient.refetchQueries({
            queryKey: ['JobPagination',{currentPage}],
            type: 'active',
          });
          message.success("Update Successfully");
          onCloseModal();
          resetForm();
        }
      })
}
