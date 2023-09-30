import Image from "next/image";
import Link from "next/link";
import React from "react";
import ThemeButton from "./themebutton";
import AuthButton from "./authButton";

export default function Navbar() {
  return (
    <header className=" mx-auto pt-3 px-4 lg:px-12">
      <div className="flex justify-between h-16">
        <div className="flex justify-between items-center w-full">
          <Link href="/">
            <div className="flex items-center gap-2">
              <p className="text-2xl font-black whitespace-nowrap text-black dark:text-white">
                MovieList
              </p>
            </div>
          </Link>
          <div className="flex gap-2">
            <AuthButton />
            <ThemeButton />
          </div>
        </div>
      </div>
    </header>
  );
}
