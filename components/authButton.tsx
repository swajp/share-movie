import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

export default async function AuthButton() {
  const { isAuthenticated } = getKindeServerSession();

  return (
    <div className="flex items-center gap-2">
      {(await isAuthenticated()) ? (
        <div className="flex gap-2 items-center">
          <div className="bg-black dark:bg-white px-3 py-2 text-white dark:text-black rounded-xl">
            <LogoutLink>Log out</LogoutLink>
          </div>
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
        </div>
      ) : (
        <div className="bg-black dark:bg-white px-3 py-2 text-white dark:text-black rounded-xl">
          <LoginLink>Log in</LoginLink>
        </div>
      )}
    </div>
  );
}
