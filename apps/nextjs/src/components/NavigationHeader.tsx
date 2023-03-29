import * as React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";

const NavigationHeader: React.FC = () => {
  return (
    <header className="container relative mx-auto p-4">
      <div className="absolute left-4 top-3/4 w-6 border-b-2 border-gray-600" />
      <div className="flex justify-between">
        <Link
          href="/"
          className="text-3xl font-bold tracking-widest text-gray-950"
        >
          ab
        </Link>
        <button
          className="font-semibold text-gray-900 hover:underline"
          onClick={() => void signOut()}
        >
          Sign out
        </button>
      </div>
    </header>
  );
};

export default NavigationHeader;
