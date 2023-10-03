import Hero from "@/components/hero";
import PopularMovies from "@/components/popularMovies";
import PopularSeries from "@/components/popularSeries";

export default function Home() {
  return (
    <div>
      <Hero />
      <PopularMovies />
      <PopularSeries />
    </div>
  );
}
