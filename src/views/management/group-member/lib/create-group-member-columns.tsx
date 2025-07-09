import { ColumnDef } from "@tanstack/react-table";

import { GroupMember } from "@/domains/group-member";

import DeleteGroupMemberConfirmWithButton from "../ui/delete-group-member-confirm-with-button";
import UpdateGroupMemberDrawerWithButton from "../ui/update-group-member-drawer-with-button";

export const createGroupMemberColumns = () => {
  const columns: ColumnDef<GroupMember>[] = [
    {
      header: "번호",
      cell: ({ row }) => <span className="block w-full text-center">{row.index + 1}</span>,
    },
    {
      header: "회원 아이디",
      accessorKey: "memberId",
      cell: ({ row }) => <span className="block w-full text-center">{row.original.memberId}</span>,
    },
    {
      header: "회원명",
      accessorKey: "memberName",
      cell: ({ row }) => (
        <span className="block w-full text-center">{row.original.memberName}</span>
      ),
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
      header: "전화번호",
      accessorKey: "telNo",
      cell: ({ row }) => <span className="block w-full text-center">{row.original.telNo}</span>,
    },
    {
      header: "사용 여부",
      accessorKey: "useYn",
      cell: ({ row }) => <span className="block w-full text-center">{row.original.useYn}</span>,
    },
    {
      header: "로그인 실패 횟수",
      accessorKey: "loginError",
      cell: ({ row }) => (
        <span className="block w-full text-center">{row.original.loginError}</span>
      ),
    },
    {
      header: "생성일",
      accessorKey: "createdAt",
      cell: ({ row }) => (
        <span className="block w-full text-center">
          {row.original.createdAt.toLocaleDateString()}
        </span>
      ),
    },
    {
      header: "관리",
      cell: ({ row }) => (
        <div className="flex justify-center gap-1">
          <UpdateGroupMemberDrawerWithButton groupMember={row.original} />
          <DeleteGroupMemberConfirmWithButton groupMember={row.original} />
        </div>
      ),
    },
  ];

  return columns;
};
