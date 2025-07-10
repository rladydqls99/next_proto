import { zodResolver } from "@hookform/resolvers/zod";
import { FieldErrors, useForm } from "react-hook-form";
import { toast } from "sonner";

import { useGetGroupSelectOptions } from "@/domains/group";
import {
  generateUpdateGroupMemberValue,
  GroupMember,
  updateGroupMemberSchema,
  UpdateGroupMemberSchema,
  useUpdateGroupMember,
} from "@/domains/group-member";

import { Form, PrimaryButton, RHFInput, RHFSelect, RHFSwitch } from "@/shared";

type PropsType = {
  groupMember: GroupMember;
  onSuccess: () => void;
};
const UpdateGroupMemberForm = ({ groupMember, onSuccess }: PropsType) => {
  const { mutate } = useUpdateGroupMember(groupMember.memberId);

  const groupOptions = useGetGroupSelectOptions();

  const methods = useForm<UpdateGroupMemberSchema>({
    defaultValues: generateUpdateGroupMemberValue(groupMember),
    resolver: zodResolver(updateGroupMemberSchema),
  });

  const handleValid = (data: UpdateGroupMemberSchema) => {
    mutate(data);
    onSuccess();
  };

  const handleInvalid = (error: FieldErrors<UpdateGroupMemberSchema>) => {
    if (error.id) {
      toast.error(error.id.message);
    }
  };

  const handleSubmit = methods.handleSubmit(handleValid, handleInvalid);

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
          수정
        </PrimaryButton>
      </form>
    </Form>
  );
};
export default UpdateGroupMemberForm;
