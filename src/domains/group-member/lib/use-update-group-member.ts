import { useMutation, useQueryClient } from "@tanstack/react-query";

import { ENDPOINT } from "@/shared";

import { apiUpdateGroupMember } from "../api/group-member-api";
import { UpdateGroupMemberSchema } from "../model/group-member-validation";

export const useUpdateGroupMember = (memberId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [ENDPOINT.GROUP_MEMBER.UPDATE(memberId)],
    mutationFn: (data: UpdateGroupMemberSchema) => apiUpdateGroupMember(data),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ENDPOINT.GROUP_MEMBER.LIST] });
    },

    onError: error => {
      console.error(error);
    },
  });
};
