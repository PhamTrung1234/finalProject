
import apiClient from "../apiUtils"


export const fetchDetailJob = async(id:string)=>{
    try {
        return await apiClient.get({url:`/cong-viec/${id}`})
    }catch(error:any){
        throw Error(error)
    }
}

export const fetchDataById = async(id:string|number)=>{
    try{
        return await apiClient.get({
            url:`/cong-viec/lay-cong-viec-theo-chi-tiet-loai/${id}`
        })
    }catch(error:any){
        throw Error(error)
    }
}



export const fetchListJobBySearch = async(param:string)=>{
    try{
        return await apiClient.get({
            url:`/cong-viec/lay-danh-sach-cong-viec-theo-ten/${param}`
        })
    }catch(error:any){
        throw Error(error)
    }
}