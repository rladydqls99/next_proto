import { LucideIcon, MonitorSmartphoneIcon, NewspaperIcon, ScanSearchIcon } from "lucide-react";

export type NavItem = {
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

export const ROUTE_PATH = {
  MANAGEMENT: {
    ROOT: "/management",
    GROUP: "/management/group",
    GROUP_MEMBER: "/management/group-member",
  },
  COMMON: {
    ROOT: "/common",
    CODE: "/common/code",
    SETTINGS: "/common/settings",
  },
  SITE: {
    ROOT: "/site",
    PAGE: "/site/page",
    MENU: "/site/menu",
  },
};

export const navItems: NavItem[] = [
  {
    key: ROUTE_PATH.MANAGEMENT.ROOT,
    title: "관리 프로그램",
    icon: MonitorSmartphoneIcon,
    disabled: false,
    children: [
      {
        key: ROUTE_PATH.MANAGEMENT.GROUP,
        title: "그룹",
        href: ROUTE_PATH.MANAGEMENT.GROUP,
      },
      {
        key: ROUTE_PATH.MANAGEMENT.GROUP_MEMBER,
        title: "그룹 회원",
        href: ROUTE_PATH.MANAGEMENT.GROUP_MEMBER,
      },
    ],
  },
  {
    key: ROUTE_PATH.COMMON.ROOT,
    title: "공통 프로그램",
    icon: NewspaperIcon,
    disabled: false,
    children: [
      {
        key: ROUTE_PATH.COMMON.CODE,
        title: "공통 코드",
        href: ROUTE_PATH.COMMON.CODE,
      },
      {
        key: ROUTE_PATH.COMMON.SETTINGS,
        title: "시스템 설정",
        href: ROUTE_PATH.COMMON.SETTINGS,
      },
    ],
  },
  {
    key: ROUTE_PATH.SITE.ROOT,
    title: "사이트 관리",
    icon: ScanSearchIcon,
    disabled: true,
    children: [
      {
        key: ROUTE_PATH.SITE.PAGE,
        title: "페이지 관리",
        href: ROUTE_PATH.SITE.PAGE,
      },
      {
        key: ROUTE_PATH.SITE.MENU,
        title: "메뉴 관리",
        href: ROUTE_PATH.SITE.MENU,
      },
    ],
  },
];
