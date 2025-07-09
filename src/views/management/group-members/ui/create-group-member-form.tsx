import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  groupMemberDefaultValue,
  groupMemberSchema,
  GroupMemberSchema,
  useCreateGroupMember,
} from "@/domains/group-members";

import { Form, PrimaryButton, RHFInput, RHFSwitch } from "@/shared";

type PropsType = {
  onSuccess: () => void;
};
const CreateGroupMemberForm = ({ onSuccess }: PropsType) => {
  const methods = useForm<GroupMemberSchema>({
    defaultValues: groupMemberDefaultValue,
    resolver: zodResolver(groupMemberSchema),
  });

  const { mutate } = useCreateGroupMember(onSuccess);

  const handleSubmit = methods.handleSubmit(data => {
    mutate(data);
  });

  return (
    <Form {...methods}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-4">
        <RHFInput name="memberId" label="회원 아이디" placeholder="회원 아이디를 입력해주세요." />
        <RHFInput name="memberName" label="회원 이름" placeholder="회원 이름을 입력해주세요." />
        <RHFInput name="groupCode" label="그룹 코드" placeholder="그룹 코드를 입력해주세요." />
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
