import { apiClient, ENDPOINT, ResponseType } from "@/shared";

import { GroupMember, GroupMemberDto, toGroupMember } from "../model/group-member-type";
import { GroupMemberSchema } from "../model/group-member-validation";

export const apiGetGroupMemberList = async (search: string): Promise<GroupMember[]> => {
  try {
    const res = await apiClient.get<ResponseType<GroupMemberDto[]>>(
      ENDPOINT.GROUP_MEMBER.LIST + "?" + new URLSearchParams({ search }).toString()
    );

    if (!res.data.success) {
      throw new Error(res.data.error?.message || "에러 발생");
    }

    return res.data.data.map(toGroupMember);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const apiCreateGroupMember = async (data: GroupMemberSchema) => {
  try {
    const res = await apiClient.post<ResponseType<GroupMemberDto>>(
      ENDPOINT.GROUP_MEMBER.CREATE,
      data
    );

    if (!res.data.success) {
      throw new Error(res.data.error?.message || "에러 발생");
    }

    return toGroupMember(res.data.data);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
