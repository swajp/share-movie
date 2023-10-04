import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import Link from "next/link";

export default async function AuthButton() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="flex items-center gap-2">
      {(await isAuthenticated()) ? (
        <div className="flex gap-2 items-center">
          <div className="bg-black dark:bg-white px-3 py-2 text-white dark:text-black rounded-xl">
            <LogoutLink>Log out</LogoutLink>
          </div>
          <Link href="/dashboard">
            {user.picture ? (
              <Image
                src={user.picture}
                alt="Profile picture"
                className="rounded-full"
                height={42}
                width={42}
              />
            ) : (
              <div className=" h-[42px] w-[42px] rounded-full bg-slate-400 dark:bg-gray-900 flex items-center justify-center">
                <p className="text-white text-base font-medium text-center">
                  {user.given_name?.[0]}
                </p>
                <p className="text-white text-base font-medium text-center">
                  {user.family_name?.[0]}
                </p>
              </div>
            )}
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
