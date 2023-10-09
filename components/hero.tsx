import SearchForm from "./searchForm";

export default function Hero() {
  return (
    <div className="max-w-screen-xl mx-auto bg-white dark:bg-black pt-4  md:p-4  flex items-center">
      <div className="p-4 flex gap-6 flex-col">
        <h1 className=" text-black dark:text-white text-3xl lg:text-4xl font-bold w-2/3">
          Discover Movies and Series you love and add them to your watchlist!
        </h1>
        <SearchForm />
      </div>
    </div>
  );
}
