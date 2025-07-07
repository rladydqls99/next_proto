import { cn } from "@/shared";

describe("cn", () => {
  it("여러 문자열을 합친다", () => {
    expect(cn("a", "b", "c")).toBe("a b c");
  });
  it("falsy 값은 무시한다", () => {
    expect(cn("a", false, null, undefined, "", "b")).toBe("a b");
  });
  it("빈 매개변수를 처리해야 함", () => {
    expect(cn()).toBe("");
  });
  it("다양한 입력 타입을 처리해야 함", () => {
    expect(cn("a", { b: true, c: false }, ["d", "e"])).toBe("a b d e");
    expect(cn({ a: true }, { b: true })).toBe("a b");
  });
  it("tailwind-merge가 적용된다", () => {
    expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500");

    // 서로 다른 속성의 클래스는 모두 유지
    expect(cn("p-4", "text-blue-500")).toBe("p-4 text-blue-500");

    // 조건부 클래스 적용
    const isActive = true;
    expect(cn("text-gray-500", isActive && "text-blue-500")).toBe("text-blue-500");
  });
});
