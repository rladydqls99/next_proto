import { getCoreRowModel, useReactTable } from "@tanstack/react-table";

import { Group } from "../model/groups.types";

import { createGroupColumns } from "./create-group-columns";

export const useGroupTable = (data: Group[]) => {
  const columns = createGroupColumns();

  const table = useReactTable({
    columns,
    data: data || [],
    getCoreRowModel: getCoreRowModel(),
    manualFiltering: true,
  });

  return table;
};
