import { ColumnDef } from "@tanstack/react-table";

import { Group } from "../model/groups.types";

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
  ];

  return columns;
};
