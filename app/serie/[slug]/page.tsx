import React from "react";
import Image from "next/image";

function getYear(date: string) {
  return new Date(date).getFullYear();
}

export default async function MoviePage({
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
    `https://api.themoviedb.org/3/tv/${params.slug}`,
    options
  );
  console.log(res.url);

  const data = await res.json();
  console.log(data);

  return (
    <div className="max-w-screen-xl mx-auto p-6 py-8 md:py-12 bg-white dark:bg-black h-screen">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-1 md:gap-8 rounded-xl border-2 dark:border-white/10 ">
        <div className="flex flex-col p-6">
          <div className="mb-6 flex flex-col gap-2">
            <div className="flex gap-2 items-end">
              <h1 className=" font-bold text-4xl">{data.name}</h1>
              <h2 className="text-xl"> ({getYear(data.release_date)})</h2>
            </div>
            <div className="flex gap-2 border dark:border-white/10 rounded-xl p-2">
              <p>Seasons: {data.number_of_seasons}</p>
              <p>Episodes: {data.number_of_episodes}</p>
            </div>
            <div className="flex gap-2">
              {data.genres.map((genre: any) => (
                <div
                  className="p-1 px-2 bg-black dark:bg-white rounded-xl"
                  key={genre.name}
                >
                  <p className="text-white dark:text-black text-sm">
                    {genre.name}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex gap-4 items-center py-3">
              <div className="border  rounded-full relative w-16 h-16 flex items-center text-center justify-center dark:border-white/20">
                <p className="text-base font-medium">
                  {Math.floor((data.vote_average / 10) * 100)}%
                </p>
              </div>
              <div className="flex gap-2 border dark:border-white/20 p-4 px-5 hover:bg-black dark:hover:bg-white rounded-xl stroke-black dark:stroke-white hover:fill-black dark:hover:fill-white hover:stroke-white dark:hover:stroke-black transition text-black dark:text-white hover:text-white dark:hover:text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  className="w-6 h-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className=" text-base">Add to watch list</p>
              </div>
            </div>

            <h2 className="text-xl">{data.overview}</h2>
          </div>

          <div>
            <p className="text-xl">{}</p>
          </div>
        </div>
        <div className="flex items-center justify-center content-center relative overflow-hidden rounded p-6">
          <Image
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            height={575}
            width={390}
            quality="100"
            alt="img"
            className="rounded-xl border-2 dark:border-white/10"
          />
        </div>
      </div>
    </div>
  );
}
