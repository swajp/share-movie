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
    `https://api.themoviedb.org/3/movie/${params.slug}`,
    options
  );
  console.log(res.url);

  const data = await res.json();
  console.log(data);

  return (
    <div className="max-w-screen-xl mx-auto p-6 py-8 md:py-12">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-1 md:gap-8 rounded ring-1 ring-white/10 ">
        <div className="flex flex-col p-6">
          <div className="mb-6 flex flex-col gap-2">
            <div className="flex gap-2 items-end">
              <h1 className="text-white font-bold text-4xl">{data.title}</h1>
              <h2 className="text-xl"> ({getYear(data.release_date)})</h2>
            </div>
            <div className="flex gap-2">
              {data.genres.map((genre: any) => (
                <div className="p-1 px-2 bg-white rounded-xl" key={genre.name}>
                  <p className="text-black text-sm">{genre.name}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-4 items-center py-3">
              <div className="border  rounded-full relative w-16 h-16 flex items-center text-center justify-center border-white/20">
                <p className="text-white  text-base font-medium">
                  {Math.floor((data.vote_average / 10) * 100)}%
                </p>
              </div>
              <div className="flex gap-2 border border-white/20 p-4 px-5 hover:bg-white rounded-xl stroke-white hover:fill-white hover:stroke-black transition text-white hover:text-black">
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

            <h2 className="text-white  text-xl">{data.overview}</h2>
          </div>

          <div>
            <p className="text-white text-xl">{}</p>
          </div>
        </div>
        <div className="flex items-center justify-center content-center relative overflow-hidden rounded p-6">
          <Image
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            height={575}
            width={390}
            quality="100"
            alt="img"
            className="rounded"
          />
        </div>
      </div>
    </div>
  );
}
