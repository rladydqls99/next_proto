import { useMutation, useQueryClient } from "@tanstack/react-query";

import { ENDPOINT } from "@/shared";

import { apiCreateGroupMember } from "../api/group-member-api";
import { GroupMemberSchema } from "../model/group-member-validation";

export const useCreateGroupMember = (successCallback: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [ENDPOINT.GROUP_MEMBER.CREATE],
    mutationFn: (data: GroupMemberSchema) => apiCreateGroupMember(data),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ENDPOINT.GROUP_MEMBER.LIST] });
      successCallback();
    },

    onError: error => {
      console.error(error);
    },
  });
};
