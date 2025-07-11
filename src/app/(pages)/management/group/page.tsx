import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

import { GroupPage } from "@/views/management/group";

import { PageHeader } from "@/widgets/headers";

import { apiGetGroupList } from "@/domains/group";

import { ENDPOINT, getNavItemByUrl, navItems, ROUTE_PATH } from "@/shared";

export const metadata = {
  title: "그룹 관리",
  description: "그룹 관리 페이지",
};

const GroupsPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [ENDPOINT.GROUP.LIST, ""],
    queryFn: () => apiGetGroupList(""),
  });

  const navItem = getNavItemByUrl(ROUTE_PATH.MANAGEMENT.GROUP, navItems);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PageHeader {...navItem} />
      <GroupPage />
    </HydrationBoundary>
  );
};

export default GroupsPage;
