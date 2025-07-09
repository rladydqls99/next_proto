import { Group } from "@/domains/group";

import {
  Dialog,
  DestructiveButton,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared";

import DeleteGroupActions from "./delete-group-actions";

type PropsType = {
  group: Group;
};

const DeleteGroupConfirmWithButton = ({ group }: PropsType) => {
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
        <DeleteGroupActions group={group} />
      </DialogContent>
    </Dialog>
  );
};
export default DeleteGroupConfirmWithButton;
