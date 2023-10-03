import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { CreateOrgLink } from "@kinde-oss/kinde-auth-nextjs/server";

import React from "react";

export default async function DashboardPage() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="flex justify-between items-center p-4">
        <h1 className=" text-black dark:text-white text-3xl lg:text-4xl font-bold">
          Movies to watch
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4"></div>
    </div>
  );
}
