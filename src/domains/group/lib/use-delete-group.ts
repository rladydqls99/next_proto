import { useMutation, useQueryClient } from "@tanstack/react-query";

import { ENDPOINT } from "@/shared";

import { apiDeleteGroup } from "../api/group-api";

export const useDeleteGroup = (groupId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [ENDPOINT.GROUP.DELETE(groupId)],
    mutationFn: apiDeleteGroup,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ENDPOINT.GROUP.LIST] });
    },

    onError: error => {
      console.error(error);
    },
  });
};
