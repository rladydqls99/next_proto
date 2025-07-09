import { apiClient, ENDPOINT, ResponseType } from "@/shared";

import { GroupMember, GroupMemberDto, toGroupMember } from "../model/group-member-type";
import { CreateGroupMemberSchema, UpdateGroupMemberSchema } from "../model/group-member-validation";

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

export const apiCreateGroupMember = async (data: CreateGroupMemberSchema) => {
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

export const apiUpdateGroupMember = async (data: UpdateGroupMemberSchema) => {
  try {
    const res = await apiClient.put<ResponseType<GroupMemberDto>>(
      ENDPOINT.GROUP_MEMBER.UPDATE(data.memberId),
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

export const apiDeleteGroupMember = async (memberId: string) => {
  try {
    const res = await apiClient.delete<ResponseType<GroupMemberDto>>(
      ENDPOINT.GROUP_MEMBER.DELETE(memberId)
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
