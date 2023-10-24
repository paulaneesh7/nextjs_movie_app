import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trending Movies",
  description: "A movie application with Next.js showing the top trending movies",
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
      </body>
    </html>
  );
}
