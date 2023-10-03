export async function getSearch(query: string) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `${process.env.NEXT_PUBLIC_API_KEY}`,
    },
  };
  const res = await fetch(
    `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=true&language=en-US&page=1`,
    options
  );
  const data = await res.json();

  return data.results;
}
