import { useMutation, useQuery } from "@tanstack/react-query";
import apiClient from "../apiUtils"
import { queryClient } from "../../http/tanstack/react-query";
import { message } from "antd";


type Comment = {
    id:number;
    maCongViec:string|number;
    maNguoiBinhLuan:string|number;
    ngayBinhLuan:string;
    noiDung:string;
    saoBinhLuan:number;
}

export const fecthComment = async(id:string)=>{
    try {
        return apiClient.get({url:`/binh-luan/lay-binh-luan-theo-cong-viec/${id}`})
    }catch(error:any){
        throw Error(error);
    }
}


export const useAddComment = (payload?:any)=>{
    return useMutation({
        mutationFn:async (value:Comment)=>{
            try{
                return await apiClient.post({
                    url:"/binh-luan",
                    params:payload,
                    data:value,
                })
            }catch(error){
                 throw("thông tin không đầy đủ")
            }
        }
        
    })
}
//get comment by id job
export const useGetCommentById = (id: number) => {
    return useQuery({
      queryKey: ['comment-byid', id],
      queryFn: async () => {
        if (!id) return null;
        try {
          const response = await apiClient.get({ url: `/binh-luan/lay-binh-luan-theo-cong-viec/${id}` });
          return response.content;
        } catch (error) {
          throw new Error("Error occurred while fetching comments.");
        }
      },
      enabled: !!id,
    });
  };

  export const useGetListComment = () => {
    return useQuery({
      queryKey: ['commentlist'],
      queryFn: async () => {
        
        try {
          const response = await apiClient.get({ url: '/binh-luan' });
          return response.content;
        } catch (error) {
          throw new Error("Error occurred while fetching comments.");
        }
      },
    });
  };
  export const useDeleteComment=()=>{
    return useMutation({
   mutationFn: async (values: any) => 
     apiClient.delete({ url: `/binh-luan/${values}` }),
   onSuccess: () => {
     queryClient.invalidateQueries({ queryKey: ['commentlist'] });
     message.success('Xóa thành công')
     
   },
   onError:()=> message.error("Bạn Không đủ quyền")
 });
   
 };

 export const useDeleteCommentbyId=()=>{
    return useMutation({
   mutationFn: async (values: any) => 
     apiClient.delete({ url: `/binh-luan/${values}` }),
   onSuccess: () => {
     queryClient.invalidateQueries({ queryKey: ['comment-byid'] });
     message.success('Xóa thành công')
     
   },
   onError:()=> message.error("Bạn Không đủ quyền")
 });
   
 };