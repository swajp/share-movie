import React from "react";
import Image from "next/image";
import MovieImage from "@/components/movieImage";
import Link from "next/link";

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

  async function getReviews(params: { slug: string }) {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    };
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${params.slug}/reviews?language=en-US&page=1`,
      options
    );

    const reviews = await res.json();
    return reviews;
  }

  const data = await res.json();
  const reviews = await getReviews(params);

  return (
    <div className="max-w-screen-xl mx-auto p-6 py-8 md:py-12 bg-white dark:bg-black h-auto flex flex-col gap-4">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-1 md:gap-8 rounded-xl border-2 dark:border-white/10 ">
        <div className="flex flex-col p-6">
          <div className="mb-6 flex flex-col gap-2">
            <div className="flex gap-2 items-end">
              <h1 className=" font-bold text-4xl">{data.title}</h1>
              <h2 className="text-xl"> ({getYear(data.release_date)})</h2>
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
          <MovieImage movie={data} imgWidth={390} />
        </div>
      </div>
      {reviews.total_results === 0 ? (
        <></>
      ) : (
        <div className="flex flex-col">
          <h1 className="font-bold text-4xl p-6">Reviews</h1>
          <div className="rounded-xl border-2 dark:border-white/10">
            {reviews.results.map((review: any) => (
              <div
                className="p-6 border-b dark:border-white/10"
                key={review.id}
              >
                <div className="flex gap-4 items-center">
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-3">
                      {review.author_details.avatar_path !== null ? (
                        <Image
                          src={`https://www.themoviedb.org/t/p/w32_and_h32_face${review.author_details.avatar_path}`}
                          width={32}
                          alt="avatar"
                          height={32}
                          className="rounded-full"
                        />
                      ) : (
                        <div className="w-8 h-8 bg-black dark:bg-white rounded-full flex items-center text-center content-center justify-center">
                          <p className="text-white dark:text-black font-medium">
                            {review.author[0]}
                          </p>
                        </div>
                      )}
                      <h1 className="font-medium text-xl">
                        <Link href={review.url}>{review.author}</Link>
                      </h1>
                      <p>
                        {review.author_details.rating !== null
                          ? review.author_details.rating + "/10"
                          : ""}
                      </p>
                    </div>
                    <p className="text-base">{review.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
