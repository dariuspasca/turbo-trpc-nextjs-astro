# TURBO-NEXTJS-TRPC-ASTRO

## About

A minimal blog cms monorepo based on [create-t3-turbo](https://github.com/t3-oss/create-t3-turbo).

It uses [Turborepo](https://turborepo.org/) and contains:

```
.github
  └─ workflows
        └─ CI with pnpm cache setup
.vscode
  └─ Recommended extensions and settings for VSCode users
apps
  ├─ astro
  |   ├─ Astro 2
  |   ├─ Tailwind CSS
  |   └─ Typesafe API calls using tRPC
  └─ next.js
      ├─ Next.js 13
      ├─ React 18
      ├─ Tailwind CSS
      └─ E2E Typesafe API Server & Client
packages
 ├─ api
 |   └─ tRPC v10 router definition
 ├─ auth
     └─ authentication using next-auth. **NOTE: Only for Next.js app, not Astro**
 └─ db
     └─ typesafe db-calls using Prisma
```

### Does this pattern leak backend code to my client applications?

No, it does not. The `api` package should only be a production dependency in the Next.js application where it's served. The Astro app, and all other apps you may add in the future, should only add the `api` package as a dev dependency. This lets you have full typesafety in your client applications, while keeping your backend code safe.

If you need to share runtime code between the client and server, such as input validation schemas, you can create a separate `shared` package for this and import on both sides.

## Quick Start

To get it running, follow the steps below:

### Setup dependencies

```diff
# Install dependencies
pnpm i

# In packages/db/prisma update schema.prisma provider to use sqlite
# or use your own database provider
- provider = "mysql"
+ provider = "postgresql"

# Configure environment variables.
# There is an `.env.example` in the root directory you can use for reference
cp .env.example .env

# Push the Prisma schema to your database
pnpm db:push
```

## Deployment

### Next.js

#### Prerequisites

_We do not recommend deploying a SQLite database on serverless environments since the data wouldn't be persisted. I provisioned a quick MySql database on [PlanetScale](https://planetscale.com/), but you can of course use any other database provider. Make sure the prisma schema is updated to use the correct database._

**Please note that the Next.js application with tRPC must be deployed in order for the Astro app to communicate with the server in a production environment.**

#### Deploy to Vercel

Let's deploy the Next.js application to [Vercel](https://vercel.com/). If you have ever deployed a Turborepo app there, the steps are quite straightforward. You can also read the [official Turborepo guide](https://vercel.com/docs/concepts/monorepos/turborepo) on deploying to Vercel.

1. Create a new project on Vercel, select the `apps/nextjs` folder as the root directory and Vercel should automatically detect the build settings.

2. Add your `DATABASE_URL`, `NEXTAUTH_URL` , `NEXTAUTH_SECRET` , `GITHUB_CLIENT_ID` , `GITHUB_CLIENT_SECRET` environment variable.

3. Done! Your app should successfully deploy. Assign your domain and use that instead of `localhost` for the `url` in the Astro app so that your Astro app can communicate with your backend when you are not in development.

### Astro

The process is similer to the Next.js deploy.

1. Create a new project on Vercel, select the `apps/astro` folder as the root directory and Vercel should automatically detect the build settings.

2. Add your `SERVER_URL` environment variable.

3. Done! Your app should successfully deploy.


## References

The stack originates from [create-t3-app](https://github.com/t3-oss/create-t3-app).