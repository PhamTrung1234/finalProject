import apiClient from "../apiUtils"


export const fetchDetailJob = async(id:string)=>{
    try {
        return await apiClient.get({url:`https://fiverrnew.cybersoft.edu.vn/api/cong-viec/${id}`})
    }catch(error:any){
        throw Error(error)
    }
}