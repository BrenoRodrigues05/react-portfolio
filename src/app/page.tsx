import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center mih-h-screen p-6">
      <h1 className="text-5xl font-bold mb-4">
        Meu <span className="text-blue-600">Portfólio</span>
      </h1>

      <p className="text-lg  text-foreground mb-4">
        Crie ou Gerencie Portfólios Facilmente 🚀
      </p>

       <div className="flex flex-col sm:flex-row gap-6">
        {/* Card 1 */}
          <div className="bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-2xl p-6 w-64 hover:shadow-lg hover:border-blue-500 transition">
            <h2 className="text-xl font-semibold mb-2">Criar Portfólio</h2>
            <p className="text-foreground mb-4">Crie um novo portfólio</p>
            <Link
              href="/create"
              className="bg-blue-600 hover:bg-amber-400 text-foreground px-4 py-2 rounded-lg transition inline-block"
            >
              Criar
            </Link>
          </div>

        {/* Card 2 */}
        <div className="bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-2xl p-6 w-64 hover:shadow-lg hover:border-blue-500 transition">
          <h2 className="text-xl font-semibold mb-2">Gerenciar Portfólios</h2>
          <p className="text-foreground mb-4">Veja e edite seus portfólios</p>
          <Link
              href="/manage"
              className="bg-blue-600 hover:bg-amber-400 text-foreground px-4 py-2 rounded-lg transition inline-block"
            >
              Gerenciar
            </Link>
        </div>
      </div>
    </main>
  );
}
