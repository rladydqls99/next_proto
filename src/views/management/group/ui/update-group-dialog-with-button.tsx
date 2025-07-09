import { Group } from "@/domains/groups";

import {
  PrimaryButton,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  useToggle,
} from "@/shared";

import UpdateGroupForm from "./update-group-form";

type PropsType = {
  group: Group;
};
const UpdateGroupDialogWithButton = ({ group }: PropsType) => {
  const { isOpen, toggle } = useToggle();

  return (
    <Sheet open={isOpen} onOpenChange={toggle}>
      <SheetTrigger asChild>
        <PrimaryButton size="xs">수정</PrimaryButton>
      </SheetTrigger>
      <SheetContent className="min-w-xl">
        <SheetHeader>
          <SheetTitle>그룹 수정</SheetTitle>
          <SheetDescription>그룹을 수정하기 위해서는 아래 정보를 입력해주세요.</SheetDescription>
        </SheetHeader>

        <UpdateGroupForm group={group} onSuccess={toggle} />
      </SheetContent>
    </Sheet>
  );
};
export default UpdateGroupDialogWithButton;
