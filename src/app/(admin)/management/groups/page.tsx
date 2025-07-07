import { PageHeader } from "@/widgets/headers";

import { getNavItemByUrl, navItems, ROUTE_PATH } from "@/shared";

export const metadata = {
  title: "그룹 관리",
  description: "그룹 관리 페이지",
};

const GroupsPage = async () => {
  const navItem = getNavItemByUrl(`${ROUTE_PATH.MANAGEMENT}/groups`, navItems);

  return (
    <div>
      <PageHeader {...navItem} />
    </div>
  );
};

export default GroupsPage;
