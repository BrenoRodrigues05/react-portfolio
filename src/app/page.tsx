import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <Header></Header>
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center p-6">
      <h1 className="text-5xl font-bold mb-4">
        Meu <span className="text-blue-700">Portfólio</span>
      </h1>

      <p className="text-lg text-gray-600 mb-10">
        Crie ou Gerencie Portfólios Facilmente 🚀
      </p>

       <div className="flex flex-col sm:flex-row gap-6">
          <div className="bg-white shadow-md rounded-2xl p-6 w-64 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">Criar Portfólio</h2>
            <p className="text-gray-600 mb-4">Crie um novo portfólio</p>
            <Link
              href="/create"
              className="bg-blue-600 hover:bg-amber-400 text-white px-4 py-2 rounded-lg transition inline-block"
            >
              Criar
            </Link>
          </div>

        <div className="bg-white shadow-md rounded-2xl p-6 w-64 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Gerenciar Portfólios</h2>
          <p className="text-gray-600 mb-4">Veja e edite seus portfólios</p>
          <Link
              href="/manage"
              className="bg-blue-600 hover:bg-amber-400 text-white px-4 py-2 rounded-lg transition inline-block"
            >
              Gerenciar
            </Link>
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
}
