import * as React from "react";
import { Toaster } from "react-hot-toast";

import NavigationHeader from "./NavigationHeader";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <NavigationHeader />
      <main className="flex h-screen flex-col items-center">{children}</main>
      <Toaster
        toastOptions={{
          className: "border-2 border-gray-900/80 rounded-lg",
          iconTheme: {
            primary: "#111827",
            secondary: "#f3f4f6",
          },
        }}
        position="bottom-right"
      />
    </>
  );
};

export default Layout;
