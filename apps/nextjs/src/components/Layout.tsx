import * as React from "react";
import { Toaster } from "react-hot-toast";

import NavigationHeader from "./NavigationHeader";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main className="mx-auto max-w-4xl px-4 md:px-0">
        <br className="my-4" />
        <NavigationHeader />
        {children}
      </main>
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
