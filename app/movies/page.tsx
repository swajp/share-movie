import UpcomingMovies from "@/components/upcomingMovies";
import NowplayingMovies from "@/components/nowplayingMovies";
import PopularMovies from "@/components/popularMovies";
import SearchForm from "@/components/searchForm";
import React from "react";

export default function MoviesPage() {
  return (
    <div className="">
      <div className="max-w-screen-xl mx-auto p-8 dark:bg-black">
        <SearchForm />
      </div>
      <NowplayingMovies />
      <UpcomingMovies />
      <PopularMovies />
    </div>
  );
}
