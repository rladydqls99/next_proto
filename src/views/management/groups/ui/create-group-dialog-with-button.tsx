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

import CreateGroupForm from "./create-group-form";

const CreateGroupDialogWithButton = () => {
  const { isOpen, toggle } = useToggle();

  return (
    <Sheet open={isOpen} onOpenChange={toggle}>
      <SheetTrigger asChild>
        <PrimaryButton size="sm">등록</PrimaryButton>
      </SheetTrigger>
      <SheetContent className="min-w-xl">
        <SheetHeader>
          <SheetTitle>그룹 등록</SheetTitle>
          <SheetDescription>그룹을 등록하기 위해서는 아래 정보를 입력해주세요.</SheetDescription>
        </SheetHeader>

        <CreateGroupForm onSuccess={toggle} />
      </SheetContent>
    </Sheet>
  );
};
export default CreateGroupDialogWithButton;
