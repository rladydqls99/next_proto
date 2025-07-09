import { GroupMember, useDeleteGroupMember } from "@/domains/group-member";

import { DestructiveButton, DialogClose, PrimaryButton } from "@/shared";

type PropsType = {
  groupMember: GroupMember;
};
const DeleteGroupMemberActions = ({ groupMember }: PropsType) => {
  const { mutate: deleteGroupMember } = useDeleteGroupMember();

  const handleDelete = () => {
    deleteGroupMember(groupMember.id);
  };

  return (
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
  );
};
export default DeleteGroupMemberActions;
