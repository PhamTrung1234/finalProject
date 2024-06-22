import apiClient from "../apiUtils"

export const fecthComment = async(id:string)=>{
    try {
        return apiClient.get({url:`/binh-luan/lay-binh-luan-theo-cong-viec/${id}`})
    }catch(error:any){
        throw Error(error);
    }
}


// style={{ color: "#1dbf73" }}