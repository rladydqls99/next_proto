import { useGetGroups } from "./use-get-group";

export const useGetGroupSelectOptions = () => {
  const { data: groupList } = useGetGroups("");

  return (
    groupList?.map(group => ({
      label: group.groupName,
      value: group.groupCode,
    })) || []
  );
};
