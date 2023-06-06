import Link from "next/link";
import React from "react";
import { FullStackCircularLogo } from "./Icons";

const HireMe = () => {
  return (
    <div className="fixed right-4 bottom-4 flex items-center justify-center overflow-hidden">
      <div className="w-64 h-auto flex items-center justify-center relative">
        <FullStackCircularLogo className={"fill-dark animate-spin-slow"} />

        <Link
          href="mailto:gero.walther@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-light shadow-md border-2 border-solid border-dark h-20 w-20 rounded-full font-semibold hover:bg-light hover:text-dark"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
