import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

import { GroupMemberPage } from "@/views/management/group-member";

import { PageHeader } from "@/widgets/headers";

import { apiGetGroupMemberList } from "@/domains/group-member";

import { ENDPOINT, getNavItemByUrl, navItems, ROUTE_PATH } from "@/shared";

export const metadata = {
  title: "그룹 회원 관리",
  description: "그룹 회원 관리 페이지",
};

const GroupMembersPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [ENDPOINT.GROUP_MEMBER.LIST, ""],
    queryFn: () => apiGetGroupMemberList(""),
  });

  const navItem = getNavItemByUrl(ROUTE_PATH.MANAGEMENT.GROUP_MEMBER, navItems);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PageHeader {...navItem} />
      <GroupMemberPage />
    </HydrationBoundary>
  );
};

export default GroupMembersPage;
