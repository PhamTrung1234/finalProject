import apiClient from "../apiUtils"


export const fetchDetailJob = async(id:string)=>{
    try {
        return await apiClient.get({url:`/cong-viec/${id}`})
    }catch(error:any){
        throw Error(error)
    }
}

//add type job

