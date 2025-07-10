import { LucideIcon } from "lucide-react";

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

export type NavItemInfo = {
  category: string;
  page: string;
  Icon: LucideIcon | null;
};

export const getNavItemByUrl = (url: string, navItems: NavItem[]): NavItemInfo => {
  for (const navItem of navItems) {
    if (navItem.children) {
      for (const child of navItem.children) {
        if (child.href === url) {
          return {
            category: navItem.title,
            page: child.title,
            Icon: navItem.icon,
          };
        }
      }
    }
  }

  return {
    category: "",
    page: "",
    Icon: null,
  };
};
