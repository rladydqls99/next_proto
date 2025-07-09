import { useMutation, useQueryClient } from "@tanstack/react-query";

import { ENDPOINT } from "@/shared";

import { apiDeleteGroupMember } from "../api/group-member-api";

export const useDeleteGroupMember = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [ENDPOINT.GROUP_MEMBER.DELETE(":groupMemberId")],
    mutationFn: (groupMemberId: string) => apiDeleteGroupMember(groupMemberId),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ENDPOINT.GROUP_MEMBER.LIST] });
    },

    onError: error => {
      console.error(error);
    },
  });
};
