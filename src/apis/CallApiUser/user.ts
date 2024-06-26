import { useMutation, useQuery } from "@tanstack/react-query";
import apiClient from "../apiUtils";
import { message } from "antd";
import { queryClient } from "../../http/tanstack/react-query";
import { PAGE_SIZE } from "../../constants";
import { Status, User, UserPagination } from "../../types/user";

//get user
export const useListUser = () => {
  return useQuery({
    queryKey: ["listUser"],
    queryFn: async () => {
      try {
        const response = await apiClient.get({ url: `/users`});
        return response.content;
      } catch (error) {
        throw "lỗi"
      }
    },
  });
};

//add user
export const useAddUser = (payload?: any) => {
  return useMutation({
    mutationFn: async (values: User) => {
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
export const useDeleteUser=(currentPage:number)=>{
    return useMutation({
        mutationFn: async(values:number)=>{
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
          queryClient.invalidateQueries({ queryKey: ['UserPagination'] });
          queryClient.refetchQueries({
            queryKey: ["UserPagination", { currentPage }],
            type: "active",
          });
          message.success("User Deleted successfully");
        },
        
    })
}

//get userList page
export const useGetListUser = (currentPage: number) => {
  return useQuery<UserPagination, string[], UserPagination>({
    queryKey: ["UserPagination",{ currentPage }],
    queryFn: async () => {
      try {
        const response = await apiClient.get<Status<UserPagination>>({ url: `/users/phan-trang-tim-kiem?pageIndex=${currentPage}&pageSize=${PAGE_SIZE}` });
        return response.content;
      } catch (error) {
        throw new Error("Error occurred while fetching user list.");
      }
    },
  });
};

//get user by id
export const useGetUserById = (id: number|string) => {
  return useQuery({
    queryKey: ["Userbyid",{id}],
    queryFn: async () => {
      try {
        const response = await apiClient.get({ url: `/users/${id}` });
        return response.content;
      } catch (error) {
        throw new Error("Error occurred while fetching user list.");
      }
    },
  });
};

//add user form data
export const useAddUserForm = (currentPage:number,onCloseModal: () => void,resetForm: () => void) => {
  return useMutation({
    mutationFn: async (values:User) => {
      try{
        
        const response = await apiClient.post({url: '/users',data:values});
        return response;
      }catch(error){throw "Error"}
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['UserPagination'] });
      queryClient.refetchQueries({
        queryKey: ["UserPagination", { currentPage }],
        type: "active",
      });
      message.success("User Add successfully");
      onCloseModal();
      resetForm();
    },
  })

};

//Update User
export const useUpdateUser=(currentPage:number,oncloseModal:()=>void,handleReset?:()=>void)=>{
  return useMutation({
    mutationFn:async({ user, values }: { user: User, values: number })=>{
      try{
        const response=await apiClient.put({url: `/users/${values}`,data:user});
        return response;
      }catch(error){throw "Error"}
    },
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey: ['UserPagination']});
      queryClient.refetchQueries({
        queryKey: ['UserPagination',{currentPage}],
        type: 'active',
      });
      message.success("Update Successfully");
      oncloseModal();
      if (typeof handleReset === 'function') {
        handleReset();
      }
    }
  })
}

//upload avatar
export const useUploadFile=(payload?:any)=>{
  return useMutation(
    {
      mutationFn: async (values: any) => {
        const response = await apiClient.post({
          url: '/users/upload-avatar',
          params: payload,
          data: values,
        });
        return response.data; // Assuming response.data contains the updated user object
      },
      onSuccess: () => {
        message.success('Upload successfully');
        queryClient.invalidateQueries({ queryKey: ["Userbyid"] });
      },
    }
    
  )
}

