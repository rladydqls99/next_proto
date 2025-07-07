import { render, screen } from "@testing-library/react";

import { Button } from "@/shared";

describe("button 컴포넌트 단위테스트", () => {
  test("button 컴포넌트 렌더링 테스트", () => {
    render(<Button>click me</Button>);
    expect(screen.getByText("click me")).toBeDefined();
  });
});
