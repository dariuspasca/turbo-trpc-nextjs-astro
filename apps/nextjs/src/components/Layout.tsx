import * as React from "react";

import NavigationHeader from "./NavigationHeader";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <NavigationHeader />
      <main className="flex h-screen flex-col items-center">{children}</main>
    </>
  );
};

export default Layout;
