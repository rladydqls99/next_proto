import { Home, Users, Settings } from "lucide-react";
import { describe, it, expect } from "vitest";

import { getNavItemByUrl, NavItem } from "@/shared";

describe("getNavItemByUrl 단위 테스트", () => {
  const mockNavItems: NavItem[] = [
    {
      key: "dashboard",
      title: "대시보드",
      icon: Home,
      disabled: false,
      children: [
        {
          key: "overview",
          title: "개요",
          href: "/dashboard/overview",
        },
        {
          key: "analytics",
          title: "분석",
          href: "/dashboard/analytics",
        },
      ],
    },
    {
      key: "management",
      title: "관리",
      icon: Users,
      disabled: false,
      children: [
        {
          key: "groups",
          title: "그룹 관리",
          href: "/management/groups",
        },
        {
          key: "group-members",
          title: "그룹 구성원",
          href: "/management/group-members",
        },
      ],
    },
    {
      key: "settings",
      title: "설정",
      icon: Settings,
      disabled: true,
      children: [
        {
          key: "profile",
          title: "프로필",
          href: "/settings/profile",
        },
      ],
    },
  ];

  it("정확한 URL 매칭 시 올바른 네비게이션 정보를 반환해야 한다", () => {
    const result = getNavItemByUrl("/management/groups", mockNavItems);

    expect(result).toEqual({
      category: "관리",
      page: "그룹 관리",
      Icon: Users,
    });
  });

  it("존재하지 않는 URL에 대해 기본값을 반환해야 한다", () => {
    const result = getNavItemByUrl("/non-existent-url", mockNavItems);

    expect(result).toEqual({
      category: "",
      page: "",
      Icon: null,
    });
  });

  it("빈 문자열 URL에 대해 기본값을 반환해야 한다", () => {
    const result = getNavItemByUrl("", mockNavItems);

    expect(result).toEqual({
      category: "",
      page: "",
      Icon: null,
    });
  });

  it("부분적으로 일치하는 URL에 대해 기본값을 반환해야 한다", () => {
    const result = getNavItemByUrl("/management", mockNavItems);

    expect(result).toEqual({
      category: "",
      page: "",
      Icon: null,
    });
  });

  it("빈 네비게이션 배열에 대해 기본값을 반환해야 한다", () => {
    const result = getNavItemByUrl("/any-url", []);

    expect(result).toEqual({
      category: "",
      page: "",
      Icon: null,
    });
  });

  it("대소문자를 구분하여 매칭해야 한다", () => {
    const result = getNavItemByUrl("/Management/Groups", mockNavItems);

    expect(result).toEqual({
      category: "",
      page: "",
      Icon: null,
    });
  });
});
