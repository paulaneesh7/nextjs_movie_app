import Image from "next/image";
import Link from "next/link";

const getData = async () => {
  const url = await fetch(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    {
      headers: {
        accept: "application/json",
        Authorization: process.env.THEMOVIEDATABASE_API,
      },
      next: {
        revalidate: 10,
      },
    }
  );

  return url.json();
};

export default async function Home() {
  const data = await getData();

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Top Trending Movies
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
          {data.results.map((movie, idx) => (
            <div
              className="flx flex-col overflow-hidden rounded-lg border bg-white"
              key={idx}
            >
              <Link
                href={`/movie/${movie.id}`}
                className="group relative block h-96 overflow-hidden bg-gray-100"
              >
                <Image
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt="image movie banner"
                  width={500}
                  height={500}
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </Link>
              <div className="flex flex-1 flex-col p-4 sm:p-6">
                <h2 className="mb-2 text-lg font-semibold text-gray-800">
                  <Link
                    href={`/movie/${movie.id}`}
                    className="transition duration-100 hover:text-teal-500 active:text-teal-600"
                  >
                    {movie.title}
                  </Link>
                </h2>

                <p className="text-gray-500 line-clamp-3">{movie.overview}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
