import Image from "next/image";
import React from "react";

export default async function Home() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMmI5M2RkMDJlOWNlMDZkNTNhNDZkMzlmNDE0OWRiYiIsInN1YiI6IjY1MTdmMTU5OWI4NjE2MDBjNWNhZmNlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.920oTwifIVzeFTB-jzbSR1P6NgU8LSiz28Q40hDSDNE",
    },
  };
  const res = await fetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
    options
  );
  const data = await res.json();

  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="flex justify-between items-center p-4">
        <h1 className=" text-black dark:text-white text-4xl font-bold">
          Popular Movies
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
        {data.results.map((movie: any) => (
          <div key={movie.id}>
            <div className="pb-2">
              <Image
                width={500}
                height={750}
                alt={movie.title}
                className="rounded-xl"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
            </div>
            <div className="flex justify-between">
              <h1 className="font-medium text-xl">{movie.title}</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w- h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
