import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

import { PageHeader } from "@/widgets/headers";

import { apiClient, ENDPOINT, getNavItemByUrl, navItems, ROUTE_PATH } from "@/shared";
import { GroupPage } from "@/views/management/group";

export const metadata = {
  title: "그룹 관리",
  description: "그룹 관리 페이지",
};

const GroupsPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [ENDPOINT.GROUP.LIST, ""],
    queryFn: () => apiClient.get(ENDPOINT.GROUP.LIST),
  });

  const navItem = getNavItemByUrl(`${ROUTE_PATH.MANAGEMENT}/groups`, navItems);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PageHeader {...navItem} />
      <GroupPage />
    </HydrationBoundary>
  );
};

export default GroupsPage;
