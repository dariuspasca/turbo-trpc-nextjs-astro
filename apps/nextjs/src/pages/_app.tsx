import "../styles/globals.css";
import type { AppType } from "next/app";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";
import ProtectedRoute from "~/components/ProtectedRoute";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ProtectedRoute>
        <Component {...pageProps} />
      </ProtectedRoute>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
