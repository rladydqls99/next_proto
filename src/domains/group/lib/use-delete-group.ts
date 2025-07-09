import { useMutation, useQueryClient } from "@tanstack/react-query";

import { ENDPOINT } from "@/shared";

import { apiDeleteGroup } from "../api/group-api";

export const useDeleteGroup = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [ENDPOINT.GROUP.DELETE(":groupId")],
    mutationFn: (groupId: string) => apiDeleteGroup(groupId),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ENDPOINT.GROUP.LIST] });
    },

    onError: error => {
      console.error(error);
    },
  });
};
