import { ColumnDef } from "@tanstack/react-table";

import { Group } from "@/domains/groups";

import { DestructiveButton } from "@/shared";

import UpdateGroupDialogWithButton from "../ui/update-group-dialog-with-button";

export const createGroupColumns = () => {
  const columns: ColumnDef<Group>[] = [
    {
      header: "번호",
      cell: ({ row }) => <span className="block w-full text-center">{row.index + 1}</span>,
    },
    {
      header: "그룹 코드",
      accessorKey: "groupCode",
      cell: ({ row }) => <span className="block w-full text-center">{row.original.groupCode}</span>,
    },
    {
      header: "그룹명",
      accessorKey: "groupName",
      cell: ({ row }) => <span className="block w-full text-center">{row.original.groupName}</span>,
    },
    {
      header: "설명",
      accessorKey: "groupDescription",
      cell: ({ row }) => row.original.description,
    },
    {
      header: "멤버 수",
      accessorKey: "memberCount",
      cell: ({ row }) => (
        <span className="block w-full text-center">{row.original.memberCount} 명</span>
      ),
    },
    {
      header: "관리",
      cell: ({ row }) => (
        <div className="flex justify-center gap-1">
          <UpdateGroupDialogWithButton group={row.original} />
          <DestructiveButton size="xs">삭제</DestructiveButton>
        </div>
      ),
    },
  ];

  return columns;
};
