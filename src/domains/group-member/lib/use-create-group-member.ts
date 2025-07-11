import { useMutation, useQueryClient } from "@tanstack/react-query";

import { ENDPOINT } from "@/shared";

import { apiCreateGroupMember } from "../api/group-member-api";
import { CreateGroupMemberSchema } from "../model/group-member-validation";

export const useCreateGroupMember = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [ENDPOINT.GROUP_MEMBER.CREATE],
    mutationFn: (data: CreateGroupMemberSchema) => apiCreateGroupMember(data),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ENDPOINT.GROUP_MEMBER.LIST] });
    },

    onError: error => {
      console.error(error);
    },
  });
};
