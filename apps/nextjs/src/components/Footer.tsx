import * as React from "react";
import { signOut } from "next-auth/react";

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center p-4">
      <button
        className="font-semibold text-gray-900 hover:underline"
        onClick={() => void signOut()}
      >
        Sign out
      </button>
    </footer>
  );
};

export default Footer;
