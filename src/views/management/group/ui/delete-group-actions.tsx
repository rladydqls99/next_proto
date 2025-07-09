import { Group, useDeleteGroup } from "@/domains/group";

import { DestructiveButton, DialogClose, PrimaryButton } from "@/shared";

type PropsType = {
  group: Group;
};
const DeleteGroupActions = ({ group }: PropsType) => {
  const { mutate: deleteGroup } = useDeleteGroup();

  const handleDelete = () => {
    deleteGroup(group.id);
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
export default DeleteGroupActions;
