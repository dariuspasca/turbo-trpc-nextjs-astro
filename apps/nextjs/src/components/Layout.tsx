import * as React from "react";
import { Toaster } from "react-hot-toast";

import Footer from "~/components/Footer";
import Header from "~/components/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main className="mx-auto flex h-screen max-w-4xl flex-col">
        <br className="my-4" />
        <Header />
        {children}
        <Footer />
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
