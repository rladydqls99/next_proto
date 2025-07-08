import { keepPreviousData, useQuery } from "@tanstack/react-query";

import { apiClient, ENDPOINT, ResponseType } from "@/shared";

import { Group } from "../model/groups-types";

export const useGetGroupList = (search: string) => {
  return useQuery({
    queryKey: [ENDPOINT.GROUP.list, search],
    queryFn: () =>
      apiClient.get<ResponseType<Group[]>>(
        ENDPOINT.GROUP.list + "?" + new URLSearchParams({ search }).toString()
      ),
    placeholderData: keepPreviousData,
  });
};
