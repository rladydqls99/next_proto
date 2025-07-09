import { useMutation, useQueryClient } from "@tanstack/react-query";

import { ENDPOINT } from "@/shared";

import { apiCreateGroup } from "../api/group-api";
import { CreateGroupSchema } from "../model/group-validation";

export const useCreateGroup = (successCallback: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [ENDPOINT.GROUP.CREATE],
    mutationFn: (group: CreateGroupSchema) => apiCreateGroup(group),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ENDPOINT.GROUP.LIST] });
      successCallback();
    },

    onError: error => {
      console.error(error);
    },
  });
};
