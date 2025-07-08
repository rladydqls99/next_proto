import { render, screen } from "@testing-library/react";

import { Input } from "@/shared";

describe("input 컴포넌트 단위 테스트", () => {
  it("기본 Input 컴포넌트가 잘 렌더링 되는가?", () => {
    render(<Input data-testid="input" />);

    const input = screen.getByTestId("input");
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass("px-4", "py-2", "text-md", "rounded-md");
    expect(input).toHaveClass(
      "bg-gray-100",
      "focus:outline-gray-300",
      "ring-1",
      "ring-gray-200",
      "hover:ring-gray-300"
    );
  });

  it("disabled 속성이 잘 적용되는가?", () => {
    render(<Input data-testid="input" disabled />);

    const input = screen.getByTestId("input");
    expect(input).toBeDisabled();
    expect(input).toHaveClass("opacity-50", "cursor-not-allowed");
  });

  it("size 속성이 잘 적용되는가?", () => {
    const { rerender } = render(<Input data-testid="input" size="sm" />);

    let input = screen.getByTestId("input");
    expect(input).toHaveClass("px-3", "py-2", "text-sm");

    rerender(<Input data-testid="input" size="lg" />);
    input = screen.getByTestId("input");
    expect(input).toHaveClass("px-5", "py-3", "text-lg");
  });

  it("rounded 속성이 잘 적용되는가?", () => {
    const { rerender } = render(<Input data-testid="input" rounded="none" />);

    let input = screen.getByTestId("input");
    expect(input).toHaveClass("rounded-none");

    rerender(<Input data-testid="input" rounded="full" />);
    input = screen.getByTestId("input");
    expect(input).toHaveClass("rounded-full");

    rerender(<Input data-testid="input" rounded="lg" />);
    input = screen.getByTestId("input");
    expect(input).toHaveClass("rounded-lg");
  });

  it("사용자 정의 className 속성이 잘 적용되는가?", () => {
    const customClass = "custom-class border-red-500";
    render(<Input data-testid="input" className={customClass} />);

    const input = screen.getByTestId("input");
    expect(input).toHaveClass("custom-class", "border-red-500");
    // 기본 클래스도 유지되는지 확인
    expect(input).toHaveClass("bg-gray-100", "px-4", "py-2");
  });

  it("HTML input 속성들이 올바르게 전달되는가?", () => {
    render(
      <Input
        data-testid="input"
        type="email"
        placeholder="이메일을 입력하세요"
        value="test@example.com"
        onChange={() => {}}
        maxLength={50}
        required
      />
    );

    const input = screen.getByTestId("input");
    expect(input).toHaveAttribute("type", "email");
    expect(input).toHaveAttribute("placeholder", "이메일을 입력하세요");
    expect(input).toHaveAttribute("value", "test@example.com");
    expect(input).toHaveAttribute("maxLength", "50");
    expect(input).toHaveAttribute("required");
  });
});
