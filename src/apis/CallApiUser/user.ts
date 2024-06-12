import { useMutation, useQuery } from "@tanstack/react-query";
import apiClient from "../apiUtils";
import { message } from "antd";
import { queryClient } from "../../http/tanstack/react-query";
export interface Users {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  gender: boolean;
  role: string;
  skill: string[];
  certification: string[];
}
//get user
export const useListUser = () => {
  return useQuery({
    queryKey: ["listUser"],
    queryFn: () => apiClient.get({ url: "/users" }),
  });
};

//add user
export const useAddUser = (payload?: any) => {
  return useMutation({
    mutationFn: async (values: Users) => {
      try {
        const response = await apiClient.post({
          url: "/users",
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

//delete user
export const useDeleteUser=()=>{
    return useMutation({
        mutationFn: async(values:any)=>{
           try{
            const response =await apiClient.delete({
                url: `/users`,
                params:{id:values},
            });
            return response;
           }catch(error) {
            throw "lỗi xóa rồi"
           }
            
        },
        onSuccess: () => {
            message.success("User Deleted successfully");
            queryClient.invalidateQueries({ queryKey: ["listUser"] });
          },
    })
}