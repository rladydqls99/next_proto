import z from "zod";

import { GroupMember } from "./group-member-type";

export const createGroupMemberSchema = z.object({
  memberId: z.string().min(1, "회원 아이디는 필수 입력 항목입니다."),
  memberName: z.string().min(1, "회원 이름은 필수 입력 항목입니다."),
  groupCode: z.string().min(1, "그룹 코드는 필수 입력 항목입니다."),
  telNo: z.string().min(1, "전화번호는 필수 입력 항목입니다."),
  useYn: z.enum(["Y", "N"]),
});

export type CreateGroupMemberSchema = z.infer<typeof createGroupMemberSchema>;

export const groupMemberDefaultValue: CreateGroupMemberSchema = {
  memberId: "",
  memberName: "",
  groupCode: "",
  telNo: "",
  useYn: "Y",
};

export const updateGroupMemberSchema = z.object({
  id: z
    .string({ message: "ID가 없습니다. 개발자에게 문의해주세요." })
    .min(1, "아이디는 필수 입력 항목입니다."),
  memberId: z.string().min(1, "회원 아이디는 필수 입력 항목입니다."),
  memberName: z.string().min(1, "회원 이름은 필수 입력 항목입니다."),
  groupCode: z.string().min(1, "그룹 코드는 필수 입력 항목입니다."),
  telNo: z.string().min(1, "전화번호는 필수 입력 항목입니다."),
  useYn: z.enum(["Y", "N"]),
});

export type UpdateGroupMemberSchema = z.infer<typeof updateGroupMemberSchema>;

export const generateUpdateGroupMemberValue = (
  groupMember: GroupMember
): UpdateGroupMemberSchema => {
  return {
    id: groupMember.id,
    memberId: groupMember.memberId,
    memberName: groupMember.memberName,
    groupCode: groupMember.groupCode,
    telNo: groupMember.telNo,
    useYn: groupMember.useYn,
  };
};
