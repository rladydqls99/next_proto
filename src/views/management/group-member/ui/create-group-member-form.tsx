import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Group, useGetGroupList } from "@/domains/group";
import {
  groupMemberDefaultValue,
  createGroupMemberSchema,
  CreateGroupMemberSchema,
  useCreateGroupMember,
} from "@/domains/group-member";

import { Form, PrimaryButton, RHFInput, RHFSelect, RHFSwitch, useGetSelectOptions } from "@/shared";

type PropsType = {
  onSuccess: () => void;
};
const CreateGroupMemberForm = ({ onSuccess }: PropsType) => {
  const { mutate } = useCreateGroupMember();

  const { data: groupList = [] } = useGetGroupList("");
  const groupOptions = useGetSelectOptions<Group>({
    list: groupList,
    label: "groupName",
    value: "groupCode",
  });

  const methods = useForm<CreateGroupMemberSchema>({
    defaultValues: groupMemberDefaultValue,
    resolver: zodResolver(createGroupMemberSchema),
  });

  const handleSubmit = methods.handleSubmit(data => {
    mutate(data);
    onSuccess();
  });

  return (
    <Form {...methods}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-4">
        <RHFInput name="memberId" label="회원 아이디" placeholder="회원 아이디를 입력해주세요." />
        <RHFInput name="memberName" label="회원 이름" placeholder="회원 이름을 입력해주세요." />
        <RHFSelect
          name="groupCode"
          label="그룹 코드"
          placeholder="그룹 코드를 입력해주세요."
          options={groupOptions}
        />

        <RHFInput name="telNo" label="전화번호" placeholder="전화번호를 입력해주세요." />
        <RHFSwitch name="useYn" label="사용 여부" />
        <PrimaryButton size="sm" type="submit" className="w-full">
          등록
        </PrimaryButton>
      </form>
    </Form>
  );
};
export default CreateGroupMemberForm;
