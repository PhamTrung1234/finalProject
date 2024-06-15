import apiClient from "../apiUtils"

export const fetchDataJob = async()=>{
    try{
        return await apiClient.get({url:'/cong-viec'})
    }catch(error:any){
        throw Error(error)
    }
}