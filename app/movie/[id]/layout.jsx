import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightSquare } from "lucide-react";
import { ReactNode } from "react";

async function getData(id) {
  const url = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    {
      headers: {
        accept: "application/json",
        Authorization: process.env.THEMOVIEDATABASE_API,
      },
      next: {
        revalidate: 60,
      },
    }
  );

  return url.json();
}

export default async function MovieId({ params, children }) {
  const data = await getData(params.id);

  return (
    <div className="min-h-screen p-10">
      <div className="h-40 md:h-96 lg:h-[100vh] relative">
        <Image
          src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
          alt="Image of movie"
          className="object-cover w-full rounded-lg"
          fill
        />
      </div>

      <h1 className="text-2xl md:text-5xl font-bold text-center pt-5">
        <span className="bg-gradient-to-r from-green-500 to-blue-500 text-transparent bg-clip-text">
          {data.title}
        </span>
      </h1>

      <div className="flex flex-col lg:flex-row gap-10 mt-10 lg:items-center">
        <div className="w-full lg:w-1/2 font-medium md:text-lg">
          <h1>
            <span className="text-teal-500">Original Lanugage:</span>{" "}
            {data.original_language}
          </h1>

          <p>
            <span className="text-teal-500">Overview:</span> {data.overview}
          </p>

          <p>
            <span className="text-teal-500">Release Date:</span>{" "}
            {data.release_date}
          </p>

          <h1 className="mt-2">
            <span className="text-teal-500">Link: </span>{" "}
            <Link
              href={data.homepage}
              target="_blank"
              className="hover:underline duration-200"
            >
              Visit Homepage 👉
            </Link>
          </h1>
        </div>
        <div className="w-full lg:w-1/2 font-medium">{children}</div>
      </div>
    </div>
  );
}
