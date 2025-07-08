import { YesOrNo } from "@/shared";

export interface GroupMemberDto {
  memberId: string;
  memberName: string;
  groupCode: string;
  groupName: string;
  telNo: number;
  useYn: YesOrNo;
  loginError: number;
  createdAt: string;
}

export interface GroupMember {
  memberId: string;
  memberName: string;
  groupCode: string;
  groupName: string;
  telNo: number;
  useYn: YesOrNo;
  loginError: number;
  createdAt: Date;
}
