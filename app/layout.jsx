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
        <nav className="px-10 pt-5 text-center">
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
