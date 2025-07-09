import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  createGroupDefaultValue,
  createGroupSchema,
  CreateGroupSchema,
  useCreateGroup,
} from "@/domains/groups";

import { Form, PrimaryButton, RHFInput, RHFTextarea } from "@/shared";

type PropsType = {
  onSuccess: () => void;
};
const CreateGroupForm = ({ onSuccess }: PropsType) => {
  const methods = useForm<CreateGroupSchema>({
    defaultValues: createGroupDefaultValue,
    resolver: zodResolver(createGroupSchema),
  });

  const { mutate } = useCreateGroup(onSuccess);

  const handleSubmit = methods.handleSubmit(data => {
    mutate(data);
  });

  return (
    <Form {...methods}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-4">
        <RHFInput name="groupCode" label="그룹 코드" placeholder="그룹 코드를 입력해주세요." />
        <RHFInput name="groupName" label="그룹 이름" placeholder="그룹 이름을 입력해주세요." />
        <RHFTextarea name="description" label="그룹 설명" placeholder="그룹 설명을 입력해주세요." />
        <PrimaryButton size="sm" type="submit" className="w-full">
          등록
        </PrimaryButton>
      </form>
    </Form>
  );
};
export default CreateGroupForm;
