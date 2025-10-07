import Link from "next/link";

export default function Home() {
  return (
    <main className="pt-20 flex flex-col items-center justify-center h-[calc(100vh-5rem)] px-4 bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-black transition-colors">
      <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-center">
        Meu <span className="text-blue-600">Portfólio</span>
      </h1>

      {/* Subtítulo */}
      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 text-center">
        Crie ou Gerencie Portfólios Facilmente 🚀
      </p>

      {/* Container dos Cards */}
      <div className="flex flex-col sm:flex-row gap-8">
        {/* Card 1 */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 w-64 shadow-md hover:shadow-xl hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1">
          <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100 text-center">
            Criar Portfólio
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-center">
            Crie um novo portfólio
          </p>
          <div className="flex justify-center">
            <Link
              href="/create"
              className="bg-blue-600 hover:bg-amber-400 text-white dark:text-gray-900 font-medium px-6 py-2 rounded-lg transition-colors duration-300 text-base"
            >
              Criar
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 w-64 shadow-md hover:shadow-xl hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1">
          <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100 text-center">
            Ver Portfólios
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-center">
            Veja os portfólios do nosso site
          </p>
          <div className="flex justify-center">
            <Link
              href="/manage"
              className="bg-blue-600 hover:bg-amber-400 text-white dark:text-gray-900 font-medium px-6 py-2 rounded-lg transition-colors duration-300 text-base"
            >
              Ver
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
