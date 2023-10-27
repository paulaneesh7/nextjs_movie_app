import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trending Movies",
  description:
    "A movie application with Next.js showing the top trending movies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-slate-950 text-white`}>
        <nav className="px-10 pt-5 flex justify-center gap-2 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#009688"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-clapperboard w-8 h-8 md:w-12 md:h-12"
          >
            <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z" />
            <path d="m6.2 5.3 3.1 3.9" />
            <path d="m12.4 3.4 3.1 4" />
            <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
          </svg>
          <Link href="/" className="text-3xl md:text-5xl font-semibold">
            Movie <span className="text-teal-400">DB</span>
          </Link>
        </nav>
        {children}
        <div className="flex justify-center items-center gap-1 text-sm md:text-lg lg:text-xl mt-5">
          <p>Made with Next.js </p>
          <a href="https://vercel.com/" target="_blank">
            <div className="flex justify-center items-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M17.992 17.023L11.981 6.977L6.008 17.023h11.984Z"
                />
              </svg>{" "}
              Vercel
            </div>
          </a>
        </div>
      </body>
    </html>
  );
}
