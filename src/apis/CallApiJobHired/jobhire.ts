import { useQuery } from "@tanstack/react-query";
import { PAGE_SIZE } from "../../constants";
import {  Status } from "../../types/user";
import { JobHiredPagination } from "../../types/job";
import apiClient from '../apiUtils'
export const useGetLisJobHired = (currentPage: number) => {
    return useQuery({
      queryKey: ["JobHiredPagination",{ currentPage }],
      queryFn: async () => {
        try {
          const response = await apiClient.get<Status<JobHiredPagination>>({ url: `/thue-cong-viec/phan-trang-tim-kiem?pageIndex=${currentPage}&pageSize=${PAGE_SIZE}` });
          return response.content;
        } catch (error) {
          throw new Error("Error occurred while fetching user list.");
        }
      },
    });
  };