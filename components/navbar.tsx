import Image from "next/image";
import Link from "next/link";
import React from "react";
import ThemeButton from "./themebutton";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Navbar() {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();
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
          <div className="flex gap-4">
            <div className="bg-black dark:bg-white px-3 py-2 text-white dark:text-black rounded-xl">
              {(await isAuthenticated()) ? (
                <LogoutLink>Log out</LogoutLink>
              ) : (
                <RegisterLink>Sign in</RegisterLink>
              )}
            </div>
            <div className="flex items-center gap-2">
              <Link href="/dashboard">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </Link>

              <ThemeButton />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
