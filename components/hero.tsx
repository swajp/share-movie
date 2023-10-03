"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { getSearch } from "./getSearch";

function renderImage(movie: any) {
  if (movie.poster_path) {
    return (
      <div className="p-2">
        <Image
          width="80"
          height="100"
          alt={movie.media_type === "movie" ? movie.title : movie.name}
          className="rounded-md"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
      </div>
    );
  } else {
    return (
      <div className="p-2">
        <div className=" bg-slate-900 w-[80px] h-[100px] rounded-md flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="grey"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        </div>
      </div>
    );
  }
}

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
                {renderImage(movie)}

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
