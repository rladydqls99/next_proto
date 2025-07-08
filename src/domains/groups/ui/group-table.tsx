"use client";

import { useState } from "react";

import { Table } from "@/shared";

import { useGetGroupList } from "../lib/use-get-group-list";
import { useGroupTable } from "../lib/use-group-table";

import GroupTableActions from "./group-table-actions";
import GroupTableSearchInput from "./group-table-search-input";

const GroupTable = () => {
  const [search, setSearch] = useState("");

  const { data } = useGetGroupList(search);
  const table = useGroupTable(data?.data.data || []);

  return (
    <div className="mt-4 flex flex-col gap-4 rounded-lg bg-white p-4">
      <div className="flex justify-between">
        <GroupTableActions />
        <GroupTableSearchInput value={search} onChange={setSearch} />
      </div>
      <Table table={table} />
    </div>
  );
};

export default GroupTable;
