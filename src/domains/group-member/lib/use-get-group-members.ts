import { keepPreviousData, useQuery } from "@tanstack/react-query";

import { ENDPOINT } from "@/shared";

import { apiGetGroupMemberList } from "../api/group-member-api";

export const useGetGroupMembers = (search: string) => {
  return useQuery({
    queryKey: [ENDPOINT.GROUP_MEMBER.LIST, search],
    queryFn: () => apiGetGroupMemberList(search),
    placeholderData: keepPreviousData,
  });
};
