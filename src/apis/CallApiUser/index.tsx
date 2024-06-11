import apiClient from "../apiUtils"


export const fetchUser = async(id:string|number)=>{
    try {
        return apiClient.get({url:`https://fiverrnew.cybersoft.edu.vn/api/users/${id}`})
    }catch(error:any){
        throw Error(error);
    }
}