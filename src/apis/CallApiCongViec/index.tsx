import apiClient from "../apiUtils"

export const fetchDataJob = async()=>{
    try{
        return await apiClient.get({url:'https://fiverrnew.cybersoft.edu.vn/api/cong-viec'})
    }catch(error:any){
        throw Error(error)
    }
}