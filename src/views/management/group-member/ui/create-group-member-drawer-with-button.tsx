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

import CreateGroupMemberForm from "./create-group-member-form";

const CreateGroupMemberWithButton = () => {
  const { isOpen, toggle } = useToggle();

  return (
    <Sheet open={isOpen} onOpenChange={toggle}>
      <SheetTrigger asChild>
        <PrimaryButton size="sm">등록</PrimaryButton>
      </SheetTrigger>
      <SheetContent className="min-w-xl">
        <SheetHeader>
          <SheetTitle>회원 등록</SheetTitle>
          <SheetDescription>회원을 등록하기 위해서는 아래 정보를 입력해주세요.</SheetDescription>
        </SheetHeader>
        <CreateGroupMemberForm />
      </SheetContent>
    </Sheet>
  );
};
export default CreateGroupMemberWithButton;
