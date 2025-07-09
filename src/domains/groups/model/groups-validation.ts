import { z } from "zod";

import { Group } from "./groups-types";

// create --------------------------------------------------------------
export const createGroupSchema = z.object({
  groupCode: z.string().min(1, { message: "그룹 코드를 입력해주세요." }),
  groupName: z.string().min(1, { message: "그룹 이름을 입력해주세요." }),
  description: z.string().min(1, { message: "그룹 설명을 입력해주세요." }),
});

export type CreateGroupSchema = z.infer<typeof createGroupSchema>;

export const createGroupDefaultValue: CreateGroupSchema = {
  groupCode: "",
  groupName: "",
  description: "",
};

// update --------------------------------------------------------------
export const updateGroupSchema = z.object({
  id: z.string({ message: "ID가 없습니다. 개발자에게 문의해주세요." }).min(1, {
    message: "ID가 없습니다. 개발자에게 문의해주세요.",
  }),
  groupCode: z.string().min(1, { message: "그룹 코드를 입력해주세요." }),
  groupName: z.string().min(1, { message: "그룹 이름을 입력해주세요." }),
  description: z.string().min(1, { message: "그룹 설명을 입력해주세요." }),
});

export type UpdateGroupSchema = z.infer<typeof updateGroupSchema>;

export const genertateUpdateGroupValue = (group: Group) => {
  return {
    id: group.id,
    groupCode: group.groupCode,
    groupName: group.groupName,
    description: group.description,
  };
};
