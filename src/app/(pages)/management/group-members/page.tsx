import { PageHeader } from "@/widgets/headers";

import { getNavItemByUrl, navItems, ROUTE_PATH } from "@/shared";

export const metadata = {
  title: "그룹 회원 관리",
  description: "그룹 회원 관리 페이지",
};

const GroupMembersPage = async () => {
  const navItem = getNavItemByUrl(`${ROUTE_PATH.MANAGEMENT}/group-members`, navItems);

  return (
    <div>
      <PageHeader {...navItem} />
    </div>
  );
};

export default GroupMembersPage;
