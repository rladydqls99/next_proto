import { apiClient, ENDPOINT, ResponseType } from "@/shared";

import { Group } from "../model/groups-types";

export const apiGetGroupList = async (search: string) => {
  try {
    const res = await apiClient.get<ResponseType<Group[]>>(
      ENDPOINT.GROUP.list + "?" + new URLSearchParams({ search }).toString()
    );

    if (!res.data.success) {
      throw new Error(res.data.error?.message || "에러 발생생");
    }

    return res.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
