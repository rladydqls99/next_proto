import { keepPreviousData, useQuery } from "@tanstack/react-query";

import { ENDPOINT } from "@/shared";

import { apiGetGroupList } from "../api/groups-api";

export const useGetGroupList = (search: string) => {
  return useQuery({
    queryKey: [ENDPOINT.GROUP.list, search],
    queryFn: () => apiGetGroupList(search),
    placeholderData: keepPreviousData,
  });
};
