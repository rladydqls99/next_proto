import { apiClient, ENDPOINT, ResponseType } from "@/shared";

import { CommonCodeDTO, CommonCodeGroupDTO } from "../model/common-code-type";

export const getCommonCodeGroup = async () => {
  try {
    const res = await apiClient.get<ResponseType<CommonCodeGroupDTO>>(
      ENDPOINT.COMMON_CODE.GROUP.LIST
    );

    if (!res.data.success) {
      throw new Error(res.data.error?.message);
    }

    return res.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getCommonCode = async (groupKey: string) => {
  try {
    const res = await apiClient.get<ResponseType<CommonCodeDTO>>(
      ENDPOINT.COMMON_CODE.CODE.LIST(groupKey)
    );

    if (!res.data.success) {
      throw new Error(res.data.error?.message);
    }

    return res.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
