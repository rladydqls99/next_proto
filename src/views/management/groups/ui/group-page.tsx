"use client";

import { useState } from "react";

import { useGetGroupList, useGroupTable } from "@/domains/groups";

import { Input, Table } from "@/shared";

import GroupTableActions from "./group-table-actions";

const GroupPage = () => {
  const [search, setSearch] = useState("");

  const { data } = useGetGroupList(search);
  const table = useGroupTable(data || []);

  return (
    <div className="mt-4 flex flex-col gap-4 rounded-lg bg-white p-4">
      <div className="flex justify-between">
        <GroupTableActions />
        <Input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="검색어를 입력해주세요."
          className="w-full max-w-200"
        />
      </div>
      <Table table={table} />
    </div>
  );
};

export default GroupPage;
