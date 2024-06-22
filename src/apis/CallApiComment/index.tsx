import { useMutation } from "@tanstack/react-query";
import apiClient from "../apiUtils"
import { queryClient } from "../../http/tanstack/react-query";

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

