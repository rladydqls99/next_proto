import { apiClient, ENDPOINT, ResponseType } from "@/shared";

import { Group } from "../model/group-types";
import { CreateGroupSchema, UpdateGroupSchema } from "../model/group-validation";

export const apiGetGroupList = async (search: string) => {
  try {
    const res = await apiClient.get<ResponseType<Group[]>>(
      ENDPOINT.GROUP.LIST + "?" + new URLSearchParams({ search }).toString()
    );

    if (!res.data.success) {
      throw new Error(res.data.error?.message || "에러 발생");
    }

    return res.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const apiCreateGroup = async (group: CreateGroupSchema) => {
  try {
    const res = await apiClient.post<ResponseType<Group>>(ENDPOINT.GROUP.CREATE, group);

    if (!res.data.success) {
      throw new Error(res.data.error?.message || "에러 발생");
    }

    return res.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const apiUpdateGroup = async (group: UpdateGroupSchema) => {
  try {
    const res = await apiClient.put<ResponseType<Group>>(ENDPOINT.GROUP.UPDATE(group.id), group);

    if (!res.data.success) {
      throw new Error(res.data.error?.message || "에러 발생");
    }

    return res.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const apiDeleteGroup = async (groupId: string) => {
  try {
    const res = await apiClient.delete<ResponseType<Group>>(ENDPOINT.GROUP.DELETE(groupId));

    if (!res.data.success) {
      throw new Error(res.data.error?.message || "에러 발생");
    }

    return res.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
