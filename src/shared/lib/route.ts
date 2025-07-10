import { NavItem } from "../config/route-config";

export const getNavItemByUrl = (url: string, navItems: NavItem[]) => {
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
