import * as React from "react";
import { useSession } from "next-auth/react";

interface ProtectedRouteProps {
  children: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { status } = useSession({ required: true });

  if (status === "loading") {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
