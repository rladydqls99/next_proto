import { ColumnDef, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { render, screen } from "@testing-library/react";

import { Table } from "@/shared";

describe("table 컴포넌트 단위 테스트", () => {
  const mockColumns: ColumnDef<{ test: string; test2: string }>[] = [
    {
      header: "test",
      accessorKey: "test",
      cell: ({ row }) => <div>{row.original.test}</div>,
    },
    {
      header: "test2",
      accessorKey: "test2",
      cell: ({ row }) => <div>{row.original.test2}</div>,
    },
  ];

  const mockData = [
    { test: "test1-1", test2: "test2-1" },
    { test: "test1-2", test2: "test2-2" },
  ];

  // React 컴포넌트 내부에서 useReactTable 사용
  const TestTableComponent = () => {
    const table = useReactTable({
      columns: mockColumns,
      data: mockData,
      getCoreRowModel: getCoreRowModel(),
    });

    return <Table table={table} />;
  };

  it("table 컴포넌트가 렌더링 되어야 한다.", () => {
    render(<TestTableComponent />);

    expect(screen.getByText("test1-1")).toBeInTheDocument();
    expect(screen.getByText("test2-1")).toBeInTheDocument();
    expect(screen.getByText("test1-2")).toBeInTheDocument();
    expect(screen.getByText("test2-2")).toBeInTheDocument();
  });

  it("테이블 헤더가 올바르게 렌더링 되어야 한다.", () => {
    render(<TestTableComponent />);

    expect(screen.getByText("test")).toBeInTheDocument();
    expect(screen.getByText("test2")).toBeInTheDocument();
  });

  it("빈 데이터일 때 테이블 구조는 유지되어야 한다.", () => {
    const EmptyTableComponent = () => {
      const table = useReactTable({
        columns: mockColumns,
        data: [],
        getCoreRowModel: getCoreRowModel(),
      });

      return <Table table={table} />;
    };

    render(<EmptyTableComponent />);

    // 헤더는 여전히 존재해야 함
    expect(screen.getByText("test")).toBeInTheDocument();
    expect(screen.getByText("test2")).toBeInTheDocument();

    // todo: 데이터가 비어있을 때 보여줄 UI 구현 후 진행행
  });

  it("테이블의 기본 HTML 구조가 올바르게 생성되어야 한다.", () => {
    render(<TestTableComponent />);

    // 테이블 요소 존재 확인
    expect(screen.getByRole("table")).toBeInTheDocument();

    // 헤더 그룹 확인
    const headers = screen.getAllByRole("columnheader");
    expect(headers).toHaveLength(2);

    // 데이터 행 확인
    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(3); // 헤더 1개 + 데이터 2개
  });

  it("테이블 스타일 클래스가 올바르게 적용되어야 한다.", () => {
    const { container } = render(<TestTableComponent />);

    // 최상위 컨테이너 클래스 확인
    const tableContainer = container.querySelector(".w-full.overflow-hidden");
    expect(tableContainer).toBeInTheDocument();

    // 테이블 래퍼 클래스 확인
    const tableWrapper = container.querySelector(
      ".overflow-hidden.rounded-xl.border.border-gray-200.bg-white.shadow-sm"
    );
    expect(tableWrapper).toBeInTheDocument();

    // 테이블 헤더 클래스 확인
    const thead = container.querySelector("thead.border-b.border-gray-100");
    expect(thead).toBeInTheDocument();
  });
});
