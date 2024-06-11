import apiClient from '../apiUtils'


export const fetchJobTypeCode = async()=>{
    try{
        const promise = await apiClient.get({url:'https://fiverrnew.cybersoft.edu.vn/api/cong-viec/lay-menu-loai-cong-viec'})
        return promise
    }catch(error:any){
        throw Error(error)
    }

       
}