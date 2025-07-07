import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Button, PrimaryButton, SecondaryButton } from "@/shared";

describe("button 컴포넌트 단위테스트", () => {
  it("기본 button 컴포넌트가 잘 렌더링 되는가?", async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>버튼</Button>);

    const button = screen.getByText("버튼");
    await userEvent.click(button);

    expect(handleClick).toHaveBeenCalled();
  });

  it("disabled 속성이 잘 적용되는가?", async () => {
    const handleClick = vi.fn();
    render(
      <Button disabled onClick={handleClick}>
        disabled 버튼
      </Button>
    );

    const button = screen.getByText("disabled 버튼");
    await userEvent.click(button);

    expect(button).toHaveClass("opacity-50", "cursor-not-allowed");
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("loading 속성이 잘 적용되는가?", async () => {
    const handleClick = vi.fn();
    render(
      <Button loading onClick={handleClick}>
        loading 버튼
      </Button>
    );

    const button = screen.getByRole("button");
    await userEvent.click(button);

    expect(button).toHaveClass("opacity-50", "cursor-not-allowed");
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("size 속성이 잘 적용되는가?", () => {
    render(<Button size="xs">xs 버튼</Button>);
    expect(screen.getByText("xs 버튼")).toHaveClass("px-2", "py-1", "text-xs");
  });

  it("rounded 속성이 잘 적용되는가?", () => {
    render(<Button rounded="none">none 버튼</Button>);
    expect(screen.getByText("none 버튼")).toHaveClass("rounded-none");
  });

  it("사용자 정의 className이 잘 적용되는가?", () => {
    render(<Button className="bg-red-500 px-6 py-4 text-lg">custom 버튼</Button>);

    expect(screen.getByText("custom 버튼")).not.toHaveClass("px-2", "py-1", "text-xs");
    expect(screen.getByText("custom 버튼")).toHaveClass("px-6", "py-4", "text-lg", "bg-red-500");
  });

  it("HTML button 속성들이 올바르게 전달되는가?", () => {
    render(
      <Button type="submit" id="test-button" data-testid="custom-button" aria-label="테스트 버튼">
        속성 테스트
      </Button>
    );

    const button = screen.getByText("속성 테스트");
    expect(button).toHaveAttribute("type", "submit");
    expect(button).toHaveAttribute("id", "test-button");
    expect(button).toHaveAttribute("data-testid", "custom-button");
    expect(button).toHaveAttribute("aria-label", "테스트 버튼");
  });
});

describe("primary button 컴포넌트 단위테스트", () => {
  it("filled 버튼이 잘 렌더링 되는가?", () => {
    render(<PrimaryButton>filled 버튼</PrimaryButton>);

    expect(screen.getByText("filled 버튼")).toHaveClass(
      "bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-active"
    );
  });

  it("outline 버튼이 잘 렌더링 되는가?", () => {
    render(<PrimaryButton variant="outline">outline 버튼</PrimaryButton>);

    expect(screen.getByText("outline 버튼")).toHaveClass(
      "ring-2 border-primary text-primary hover:bg-gray-100 active:bg-gray-200"
    );
  });

  it("link 버튼이 잘 렌더링 되는가?", () => {
    render(<PrimaryButton variant="link">link 버튼</PrimaryButton>);

    expect(screen.getByText("link 버튼")).toHaveClass(
      "text-primary underline hover:text-primary-hover active:text-primary-active"
    );
  });
});

describe("secondary button 컴포넌트 단위테스트", () => {
  it("filled 버튼이 잘 렌더링 되는가?", () => {
    render(<SecondaryButton>filled 버튼</SecondaryButton>);

    expect(screen.getByText("filled 버튼")).toHaveClass(
      "bg-secondary text-secondary-foreground hover:bg-secondary-hover active:bg-secondary-active"
    );
  });

  it("outline 버튼이 잘 렌더링 되는가?", () => {
    render(<SecondaryButton variant="outline">outline 버튼</SecondaryButton>);

    expect(screen.getByText("outline 버튼")).toHaveClass(
      "ring-2 border-secondary text-secondary hover:bg-gray-100 active:bg-gray-200"
    );
  });

  it("link 버튼이 잘 렌더링 되는가?", () => {
    render(<SecondaryButton variant="link">link 버튼</SecondaryButton>);

    expect(screen.getByText("link 버튼")).toHaveClass(
      "text-secondary underline hover:text-secondary-hover active:text-secondary-active"
    );
  });
});
