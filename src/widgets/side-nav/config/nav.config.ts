import { LucideIcon, MonitorSmartphoneIcon, NewspaperIcon, ScanSearchIcon } from "lucide-react";

type NavItem = {
  key: string;
  title: string;
  icon: LucideIcon;
  disabled: boolean;
  children: {
    key: string;
    title: string;
    href: string;
  }[];
};

export const navItems: NavItem[] = [
  {
    key: "management",
    title: "관리 프로그램",
    icon: MonitorSmartphoneIcon,
    disabled: false,
    children: [
      {
        key: "group",
        title: "그룹",
        href: "/groups",
      },
      {
        key: "group-member",
        title: "그룹 회원",
        href: "/group-members",
      },
    ],
  },
  {
    key: "common",
    title: "공통 프로그램",
    icon: NewspaperIcon,
    disabled: false,
    children: [
      {
        key: "code",
        title: "공통 코드",
        href: "/admin/common/code",
      },
      {
        key: "settings",
        title: "시스템 설정",
        href: "/admin/common/settings",
      },
    ],
  },
  {
    key: "site",
    title: "사이트 관리",
    icon: ScanSearchIcon,
    disabled: true,
    children: [
      {
        key: "pages",
        title: "페이지 관리",
        href: "/admin/site/pages",
      },
      {
        key: "menu",
        title: "메뉴 관리",
        href: "/admin/site/menu",
      },
      {
        key: "banner",
        title: "배너 관리",
        href: "/admin/site/banner",
      },
    ],
  },
];
