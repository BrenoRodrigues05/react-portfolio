import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white dark:bg-gray-900 shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-3">
        <h1 className="text-xl font-bold">
          Meu <span className="text-blue-700">Portfólio</span>
        </h1>

        <ul className="flex items-center gap-4 text-sm">
          <li>
            <Link
              href="/"
              className="text-gray-800 dark:text-gray-100 hover:text-blue-700 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/manage"
              className="text-gray-800 dark:text-gray-100 hover:text-blue-700 transition"
            >
              Portfólios
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
