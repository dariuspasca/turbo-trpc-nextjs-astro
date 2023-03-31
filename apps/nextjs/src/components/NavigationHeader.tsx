import * as React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";

const NavigationHeader: React.FC = () => {
  return (
    <header className="relative flex gap-4 border-b py-3">
      <div className="relative p-4">
        <div className="absolute left-4 top-3/4 w-10 border-b-2 border-gray-800"></div>
        <div className="flex justify-between">
          <Link
            href="/"
            className="-mt-2 text-5xl font-bold tracking-widest text-gray-950"
          >
            ab
          </Link>
        </div>
      </div>
      <div className="flex-1">
        <h1 className="text-4xl font-extrabold text-indigo-500 md:text-5xl">
          Blog CMS
        </h1>
        <h2 className="flex-1 text-xl dark:text-gray-700">
          Minimal cms made with Nextjs
        </h2>
      </div>
      <button
        className="font-semibold text-gray-900 hover:underline"
        onClick={() => void signOut()}
      >
        Sign out
      </button>
    </header>
  );
};

export default NavigationHeader;
