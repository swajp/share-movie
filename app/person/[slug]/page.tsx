import React from "react";
import Image from "next/image";
import MovieImage from "@/components/movieImage";

function getYear(date: string) {
  return new Date(date).getFullYear();
}

export default async function PersonPage({
  params,
}: {
  params: { slug: string };
}) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `${process.env.NEXT_PUBLIC_API_KEY}`,
    },
  };
  const res = await fetch(
    `https://api.themoviedb.org/3/person/${params.slug}`,
    options
  );

  const data = await res.json();
  console.log(data);

  return (
    <div className="max-w-screen-xl mx-auto p-6 py-8 md:py-12 bg-white dark:bg-black h-screen">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-1 md:gap-8 rounded-xl border-2 dark:border-white/10 ">
        <div className="flex flex-col p-6">
          <div className="mb-6 flex flex-col gap-2">
            <h1 className=" font-bold text-4xl">{data.name}</h1>
            <div className="flex gap-2"></div>
            <div className="flex gap-4 items-center py-3">
              <div className="flex gap-2 border dark:border-white/20 p-4 px-5 hover:bg-black dark:hover:bg-white rounded-xl stroke-black dark:stroke-white hover:fill-black dark:hover:fill-white hover:stroke-white dark:hover:stroke-black transition text-black dark:text-white hover:text-white dark:hover:text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>

                <p className=" text-base">Add to favorites</p>
              </div>
            </div>

            <h2 className="text-xl">{data.biography}</h2>
          </div>

          <div>
            <p className="text-xl">{}</p>
          </div>
        </div>
        <div className="flex items-center justify-center content-center relative overflow-hidden rounded p-6">
          <Image
            width={390}
            height={50}
            alt={data.original_name}
            className="rounded-md"
            src={`https://image.tmdb.org/t/p/w500${data.profile_path}`}
          />
        </div>
      </div>
    </div>
  );
}
