import { useQuery } from "@tanstack/react-query";
import { PAGE_SIZE, PAGE_SIZE_TYPEJOB } from "../../constants";
import { Status } from "../../types/user";
import apiClient from '../apiUtils'
import { JobTypePagination } from "../../types/job";

//get list type job
export const useGetListJobType = (currentPage: number) => {
    return useQuery({
      queryKey: ["JobTypePagination",{ currentPage }],
      queryFn: async () => {
        try {
          const response = await apiClient.get<Status<JobTypePagination>>({ url: `/loai-cong-viec/phan-trang-tim-kiem?pageIndex=${currentPage}&pageSize=${PAGE_SIZE_TYPEJOB}` });
          return response.content;
        } catch (error) {
          throw new Error("Error occurred while fetching user list.");
        }
      },
    });
  };