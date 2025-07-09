import z from "zod";

export const groupMemberSchema = z.object({
  memberId: z.string().min(1, "회원 아이디는 필수 입력 항목입니다."),
  memberName: z.string().min(1, "회원 이름은 필수 입력 항목입니다."),
  groupCode: z.string().min(1, "그룹 코드는 필수 입력 항목입니다."),
  telNo: z.string().min(1, "전화번호는 필수 입력 항목입니다."),
  useYn: z.enum(["Y", "N"]),
});

export type GroupMemberSchema = z.infer<typeof groupMemberSchema>;

export const groupMemberDefaultValue: GroupMemberSchema = {
  memberId: "",
  memberName: "",
  groupCode: "",
  telNo: "",
  useYn: "Y",
};
