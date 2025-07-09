import { ColumnDef, getCoreRowModel, useReactTable } from "@tanstack/react-table";

type PropsType<T> = {
  columns: ColumnDef<T>[];
  data: T[];
};

export const useTable = <T>({ columns, data }: PropsType<T>) => {
  const table = useReactTable({
    columns,
    data: data || [],
    getCoreRowModel: getCoreRowModel(),
    manualFiltering: true,
  });

  return table;
};
