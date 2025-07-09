import { DestructiveButton, PrimaryButton, SecondaryButton } from "@/shared";

const GroupTableActions = () => {
  return (
    <div className="flex gap-2">
      <PrimaryButton size="sm">등록</PrimaryButton>
      <SecondaryButton size="sm">Excel</SecondaryButton>
      <DestructiveButton size="sm">일괄 등록</DestructiveButton>
    </div>
  );
};

export default GroupTableActions;
