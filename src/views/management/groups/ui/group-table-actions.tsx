import { DestructiveButton, SecondaryButton } from "@/shared";

import CreateGroupDialogWithButton from "./create-group-dialog-with-button";

const GroupTableActions = () => {
  return (
    <div className="flex gap-2">
      <CreateGroupDialogWithButton />
      <SecondaryButton size="sm">Excel</SecondaryButton>
      <DestructiveButton size="sm">일괄 등록</DestructiveButton>
    </div>
  );
};

export default GroupTableActions;
