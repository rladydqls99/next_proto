"use client";

import { QueryClient, QueryClientProvider as Provider, isServer } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const makeQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });
};

let browserClient: QueryClient | undefined = undefined;

const getQueryClient = () => {
  if (isServer) {
    return makeQueryClient();
  } else {
    if (!browserClient) {
      browserClient = makeQueryClient();
    }
    return browserClient;
  }
};

const QueryClientProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = getQueryClient();

  return (
    <Provider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </Provider>
  );
};

export default QueryClientProvider;
