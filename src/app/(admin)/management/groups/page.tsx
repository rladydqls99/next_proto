import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

import { PageHeader } from "@/widgets/headers";

import { ENDPOINT, getNavItemByUrl, navItems, ROUTE_PATH } from "@/shared";

export const metadata = {
  title: "그룹 관리",
  description: "그룹 관리 페이지",
};

const GroupsPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [ENDPOINT.GROUP.list],
    queryFn: () => fetch(ENDPOINT.GROUP.list, { next: { revalidate: 5 } }).then(res => res.json()),
    staleTime: 1000 * 60 * 5,
  });

  const navItem = getNavItemByUrl(`${ROUTE_PATH.MANAGEMENT}/groups`, navItems);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PageHeader {...navItem} />
    </HydrationBoundary>
  );
};

export default GroupsPage;
