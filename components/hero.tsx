"use client";
import Link from "next/link";
import React, { useState } from "react";
import { getSearch } from "./getSearch";
import MovieImage from "./movieImage";

export default function Hero() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    setTimeout(async () => {
      if (query.length > 0) {
        const data = await getSearch(query);

        setResults(data);
      } else {
        setResults([]);
      }
    }, 1000);
  };
  return (
    <div className="max-w-screen-xl mx-auto bg-white dark:bg-black p-0 md:p-4 h-[40vh] flex items-center">
      <div className="p-4 flex gap-6 flex-col">
        <h1 className=" text-black dark:text-white text-3xl lg:text-4xl font-bold w-2/3">
          Discover Movies and Series you love and add them to your watchlist!
        </h1>
        <form className="w-full border dark:border-white/10 rounded-xl p-4 flex justify-between">
          <input
            type="text"
            className="w-full outline-none bg-transparent text-black dark:text-white"
            placeholder="Search for movies and series"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              handleSearch();
            }}
            onBlur={() => {
              setTimeout(() => {
                setQuery("");
                setResults([]);
              }, 200);
            }}
          />
          <div>
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
        </form>
        <div className="relative">
          <div className="absolute grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-white dark:bg-black rounded-xl py-4 gap-4">
            {results.map((movie: any) => (
              <div
                key={movie.id}
                className="bg-white dark:bg-black  border rounded-xl dark:border-white/10 flex items-center"
              >
                <MovieImage movie={movie} imgWidth={80} />

                <div className="p-4 font-medium text-lg" key={movie.id}>
                  {movie.media_type === "movie" ? (
                    <Link href={`/movie/${movie.id}`}>{movie.title}</Link>
                  ) : (
                    <Link href={`/serie/${movie.id}`}>{movie.name}</Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
