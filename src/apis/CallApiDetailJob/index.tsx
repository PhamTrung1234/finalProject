import apiClient from "../apiUtils"


export const fetchDetailJob = async(id:string)=>{
    try {
        return await apiClient.get({url:`/cong-viec/${id}`})
    }catch(error:any){
        throw Error(error)
    }
}

export const fetchDataSearch = async(id:string)=>{
    try{
        return await apiClient.get({
            url:`/cong-viec/lay-danh-sach-cong-viec-theo-ten/${id}`
        })
    }catch(error:any){
        throw Error(error)
    }
}
