import { httpBatchLink } from "@trpc/client";
import { createTRPCProxyClient } from "@trpc/react-query";
import superjson from "superjson";

import type { AppRouter } from "@acme/api";

const getBaseUrl = () => {
  return import.meta.env.SERVER_URL;
};

export const api = createTRPCProxyClient<AppRouter>({
  transformer: superjson,
  links: [
    httpBatchLink({
      url: `${getBaseUrl()}/api/trpc`,
    }),
  ],
});
