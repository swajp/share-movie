import Hero from "@/components/hero";
import PopularMovies from "@/components/popularMovies";
import PopularShows from "@/components/popularShows";

export default function Home() {
  return (
    <div>
      <Hero />
      <PopularMovies />
      <PopularShows />
    </div>
  );
}
