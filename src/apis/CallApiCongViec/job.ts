import { useQuery } from "@tanstack/react-query"
import { JobPagination } from "../../types/job"
import apiClient from "../apiUtils";
import { Status } from "../../types/user";
import { PAGE_SIZE } from "../../constants";

//get list of job
export const useGetListJob=(currentPage:number)=>{
    return useQuery({
       queryKey: ["JobPagination",{currentPage}],
       queryFn: async ()=>{
            try {
                const response = await apiClient.get<Status<JobPagination>>({url:`/cong-viec/phan-trang-tim-kiem?pageIndex=${currentPage}&pageSize=${PAGE_SIZE}`});
                return response.content;
            } catch (error) { throw "Error occurred while fetching user list."}
        },
    });
}

