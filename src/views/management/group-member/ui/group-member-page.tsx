"use client";

import { useGetGroupMemberList } from "@/domains/group-member";

import { Input, Table, useDebounceInput, useTable } from "@/shared";

import { createGroupMemberColumns } from "../lib/create-group-member-columns";

import CreateGroupMemberDrawerWithButton from "./create-group-member-drawer-with-button";

const GroupMemberPage = () => {
  const { value, visibleValue, handleChange } = useDebounceInput();

  const { data: groupMembers } = useGetGroupMemberList(value);
  const columns = createGroupMemberColumns();

  const table = useTable({ columns, data: groupMembers || [] });

  return (
    <div className="mt-4 flex flex-col gap-4 rounded-lg bg-white p-4">
      <div className="flex justify-between">
        <CreateGroupMemberDrawerWithButton />

        <Input
          value={visibleValue}
          onChange={handleChange}
          placeholder="검색어를 입력해주세요."
          className="w-full max-w-200"
        />
      </div>
      <Table table={table} />
    </div>
  );
};

export default GroupMemberPage;
