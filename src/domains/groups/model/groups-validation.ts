import { z } from "zod";

export const createGroupSchema = z.object({
  groupCode: z.string().min(1, { message: "그룹 코드를 입력해주세요." }),
  groupName: z.string().min(1, { message: "그룹 이름을 입력해주세요." }),
  description: z.string().min(1, { message: "그룹 설명을 입력해주세요." }),
});

export type CreateGroupSchema = z.infer<typeof createGroupSchema>;

export const createGroupDefaultValues: CreateGroupSchema = {
  groupCode: "",
  groupName: "",
  description: "",
};
