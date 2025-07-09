import { GroupMember } from "@/domains/group-member";

import { DestructiveButton, useToggle } from "@/shared";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared";

import DeleteGroupMemberActions from "./delete-group-member-actions";

type PropsType = {
  groupMember: GroupMember;
};
const DeleteGroupMemberConfirmWithButton = ({ groupMember }: PropsType) => {
  const { isOpen, toggle } = useToggle();

  return (
    <Dialog open={isOpen} onOpenChange={toggle}>
      <DialogTrigger asChild>
        <DestructiveButton size="xs">삭제</DestructiveButton>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>그룹 회원 삭제</DialogTitle>
          <DialogDescription>그룹 회원을 삭제하시겠습니까?</DialogDescription>
        </DialogHeader>
        <DeleteGroupMemberActions groupMember={groupMember} />
      </DialogContent>
    </Dialog>
  );
};
export default DeleteGroupMemberConfirmWithButton;
