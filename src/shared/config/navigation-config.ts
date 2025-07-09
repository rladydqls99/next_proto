import { MonitorSmartphoneIcon, NewspaperIcon, ScanSearchIcon } from "lucide-react";

import { NavItem } from "@/shared";

export const ROUTE_PATH = {
  MANAGEMENT: "/management",
  COMMON: "/common",
  SITE: "/site",
};

export const navItems: NavItem[] = [
  {
    key: ROUTE_PATH.MANAGEMENT,
    title: "관리 프로그램",
    icon: MonitorSmartphoneIcon,
    disabled: false,
    children: [
      {
        key: `${ROUTE_PATH.MANAGEMENT}/group`,
        title: "그룹",
        href: `${ROUTE_PATH.MANAGEMENT}/group`,
      },
      {
        key: `${ROUTE_PATH.MANAGEMENT}/group-member`,
        title: "그룹 회원",
        href: `${ROUTE_PATH.MANAGEMENT}/group-member`,
      },
    ],
  },
  {
    key: ROUTE_PATH.COMMON,
    title: "공통 프로그램",
    icon: NewspaperIcon,
    disabled: false,
    children: [
      {
        key: "code",
        title: "공통 코드",
        href: `${ROUTE_PATH.COMMON}/code`,
      },
      {
        key: "settings",
        title: "시스템 설정",
        href: `${ROUTE_PATH.COMMON}/settings`,
      },
    ],
  },
  {
    key: ROUTE_PATH.SITE,
    title: "사이트 관리",
    icon: ScanSearchIcon,
    disabled: true,
    children: [
      {
        key: "pages",
        title: "페이지 관리",
        href: `${ROUTE_PATH.SITE}/pages`,
      },
      {
        key: "menu",
        title: "메뉴 관리",
        href: `${ROUTE_PATH.SITE}/menu`,
      },
    ],
  },
];
