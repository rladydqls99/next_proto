import { zodResolver } from "@hookform/resolvers/zod";
import { FieldErrors, useForm } from "react-hook-form";
import { toast } from "sonner";

import {
  genertateUpdateGroupValue,
  Group,
  updateGroupSchema,
  UpdateGroupSchema,
  useUpdateGroup,
} from "@/domains/groups";

import { Form, PrimaryButton, RHFInput, RHFTextarea } from "@/shared";

type PropsType = {
  group: Group;
  onSuccess: () => void;
};
const UpdateGroupForm = ({ group, onSuccess }: PropsType) => {
  const { mutate } = useUpdateGroup({ groupId: group.id, successCallback: onSuccess });

  const methods = useForm<UpdateGroupSchema>({
    defaultValues: genertateUpdateGroupValue(group),
    resolver: zodResolver(updateGroupSchema),
  });

  const handleValid = (data: UpdateGroupSchema) => {
    mutate(data);
  };

  const handleInvalid = (error: FieldErrors<UpdateGroupSchema>) => {
    if (error.id) {
      toast.error(error.id.message);
    }
  };

  const handleSubmit = methods.handleSubmit(handleValid, handleInvalid);

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
export default UpdateGroupForm;
