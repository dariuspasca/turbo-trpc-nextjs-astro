import * as React from "react";
import Link from "next/link";

const NavigationHeader: React.FC = () => {
  return (
    <header className="container relative mx-auto p-4">
      <Link
        href="/create-post"
        className="text-3xl font-bold tracking-widest text-gray-950"
      >
        ab
      </Link>
      <div className="absolute left-4 top-3/4 w-6 border-b-2 border-gray-600"></div>
    </header>
  );
};

export default NavigationHeader;
