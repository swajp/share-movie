import Link from "next/link";
import React from "react";
import Image from "next/image";

export default async function PopularMovies() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `${process.env.NEXT_PUBLIC_API_KEY}`,
    },
  };
  const res = await fetch(
    "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
    options
  );
  const data = await res.json();
  return (
    <div className="max-w-screen-xl mx-auto bg-white dark:bg-black p-0 md:p-4">
      <div className="flex justify-between items-center  p-4">
        <h1 className=" text-black dark:text-white text-3xl lg:text-4xl font-bold">
          Popular Movies
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2 md:p-4">
        {data.results.map((movie: any) => (
          <div
            key={movie.id}
            className="p-2 border-2  dark:border-white/10 rounded-2xl"
          >
            <Link href={`/movie/${movie.id}`}>
              <div className="p-2">
                <Image
                  width={500}
                  height={750}
                  alt={movie.title}
                  className="rounded-md"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                />
              </div>
              <div className="flex justify-between">
                <h1 className="font-medium text-base lg:text-xl pl-2">
                  {movie.name}
                </h1>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    className="w-6 h-6 hidden md:flex  stroke-black dark:stroke-white hover:fill-black dark:hover:fill-white hover:stroke-white dark:hover:stroke-black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
