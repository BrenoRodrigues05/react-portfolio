"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fade out 
  const fadeDistance = 300;
  const opacity = scrollY < fadeDistance ? 1 - scrollY / fadeDistance : 0;

  return (
    <header
      className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 transition-opacity duration-300"
      style={{ opacity }}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-3">
        <h1 className="text-xl font-bold">
          Meu <span className="text-blue-600">Portfólio</span>
        </h1>

        <ul className="flex items-center gap-4 text-sm">
          <li>
            <Link
              href="/"
              className="text-foreground  hover:text-blue-700 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/manage"
              className="text-foreground hover:text-blue-700 transition"
            >
              Portfólios
            </Link>
          </li>
          <ThemeToggle />
        </ul>
      </nav>
    </header>
  );
}
