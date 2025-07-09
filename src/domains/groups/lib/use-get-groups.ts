import { keepPreviousData, useQuery } from "@tanstack/react-query";

import { ENDPOINT } from "@/shared";

import { apiGetGroupList } from "../api/groups-api";

export const useGetGroups = (search: string) => {
  return useQuery({
    queryKey: [ENDPOINT.GROUP.LIST, search],
    queryFn: () => apiGetGroupList(search),
    placeholderData: keepPreviousData,
  });
};
