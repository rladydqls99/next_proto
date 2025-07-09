import { useMutation, useQueryClient } from "@tanstack/react-query";

import { ENDPOINT } from "@/shared";

import { apiUpdateGroup } from "../api/groups-api";
import { UpdateGroupSchema } from "../model/groups-validation";

type PropsType = {
  groupId: string;
  successCallback: () => void;
};
export const useUpdateGroup = ({ groupId, successCallback }: PropsType) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [ENDPOINT.GROUP.UPDATE(groupId)],
    mutationFn: (group: UpdateGroupSchema) => apiUpdateGroup(group),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ENDPOINT.GROUP.LIST] });
      successCallback();
    },

    onError: error => {
      console.error(error);
    },
  });
};
