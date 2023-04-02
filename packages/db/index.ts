import { PrismaClient } from "@prisma/client";

export * from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

// We want to trigger a build hook for Astro app when we add a new post
// Prisma does not support real-time database event triggers yet so we use the middleware
// see: https://github.com/prisma/prisma/issues/905
prisma.$use(async (params, next) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const result: Promise<unknown> = await next(params);

  if (
    process.env.NODE_ENV === "production" &&
    process.env.DEPLOY_HOOK_URL &&
    params.model === "Post" &&
    params.action === "create"
  ) {
    fetch(process.env.DEPLOY_HOOK_URL, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }).catch((e) => console.log("Failed to update Astro app with err", e));
  }

  return result;
});

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
