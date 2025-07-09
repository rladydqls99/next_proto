"use client";

import { useGetGroups } from "@/domains/groups";

import { DestructiveButton, Input, SecondaryButton, Table, useDebounceInput } from "@/shared";

import { useGroupTable } from "../lib/use-group-table";

import CreateGroupDialogWithButton from "./create-group-dialog-with-button";

const GroupPage = () => {
  const { value, visibleValue, handleChange } = useDebounceInput();

  const { data: groups } = useGetGroups(value);
  const table = useGroupTable(groups || []);

  return (
    <div className="mt-4 flex flex-col gap-4 rounded-lg bg-white p-4">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <CreateGroupDialogWithButton />
          <SecondaryButton size="sm">Excel</SecondaryButton>
          <DestructiveButton size="sm">일괄 등록</DestructiveButton>
        </div>
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

export default GroupPage;
