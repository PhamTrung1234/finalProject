
import { useMutation } from "@tanstack/react-query";
import apiClient from "../apiUtils"
import { message } from "antd";
import { queryClient } from "../../http/tanstack/react-query";
import { User } from "../../types/user";
type UserSignin = {
    email:string;
    password:string;
}



export const useAddUPostSignup = (payload?: any) => {
    return useMutation({
      mutationFn: async (values: User) => {
        try {
          const response = await apiClient.post({
            url: "/auth/signup",
            params: payload,
            data: values,
          });
          return response;
        } catch (error) {
          throw "Lỗi thêm rồi";
        }
      },
      onSuccess: () => {
        message.success("User added successfully");
        queryClient.invalidateQueries({ queryKey: ["listUser"] });
      },
      onError: (error: string) => {
        message.error(error);
      },
    });
  };

  export const postSignIn = (payload?:any)=>{
      return useMutation({
         mutationFn: async(user:UserSignin)=>{
            try{
                return await apiClient.post({
                    url:"/auth/signin",
                    params:payload,
                    data:user,
                })
            }catch(error){
                throw("The account is incorrect or does not exist")
            }
         },
         onSuccess:()=>{
           
            message.success("Logged in successfully")
            
         },
         onError:()=>{
            message.error("The account is incorrect or does not exist")
         }
      })
  }