import { httpBatchLink } from "@trpc/client";
import { createTRPCProxyClient } from "@trpc/react-query";
import superjson from "superjson";

import type { AppRouter } from "@acme/api";

const getBaseUrl = () => {
  return `http://localhost:3000`;
};

export const api = createTRPCProxyClient<AppRouter>({
  transformer: superjson,
  links: [
    httpBatchLink({
      url: `${getBaseUrl()}/api/trpc`,
    }),
  ],
});
