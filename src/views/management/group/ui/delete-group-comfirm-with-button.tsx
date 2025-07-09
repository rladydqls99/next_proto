import { Group, useDeleteGroup } from "@/domains/groups";

import { DestructiveButton, DialogClose, PrimaryButton } from "@/shared";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared";

type PropsType = {
  group: Group;
};
const DeleteGroupConfirmWithButton = ({ group }: PropsType) => {
  const { mutate } = useDeleteGroup(group.id);

  const handleDelete = () => {
    mutate(group.id);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <DestructiveButton size="xs">삭제</DestructiveButton>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>그룹 삭제</DialogTitle>
          <DialogDescription>그룹을 삭제하시겠습니까?</DialogDescription>
        </DialogHeader>
        <div className="flex justify-end gap-2">
          <DialogClose asChild>
            <PrimaryButton size="sm">취소</PrimaryButton>
          </DialogClose>
          <DialogClose asChild>
            <DestructiveButton onClick={handleDelete} size="sm">
              삭제
            </DestructiveButton>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default DeleteGroupConfirmWithButton;
