import { YesOrNo } from "@/shared";

export interface GroupMemberDto {
  id: string;
  memberId: string;
  memberName: string;
  groupCode: string;
  groupName: string;
  telNo: string;
  useYn: YesOrNo;
  loginError: number;
  createdAt: string;
}

export interface GroupMember {
  id: string;
  memberId: string;
  memberName: string;
  groupCode: string;
  groupName: string;
  telNo: string;
  useYn: YesOrNo;
  loginError: number;
  createdAt: Date;
}

export const toGroupMember = (dto: GroupMemberDto): GroupMember => {
  return {
    ...dto,
    createdAt: new Date(dto.createdAt),
  };
};

export const toGroupMemberDto = (groupMember: GroupMember): GroupMemberDto => {
  return {
    ...groupMember,
    createdAt: groupMember.createdAt.toISOString(),
  };
};
