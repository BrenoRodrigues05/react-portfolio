export default function Header() {
  return (
    <header className="w-full bg-white dark:bg-gray-900 shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-3">
        <h1 className="text-xl font-bold">
       Meu <span className="text-blue-700"> Portfólio</span></h1>
        <ul className="flex items-center gap-4 text-sm">
          <li>
            <a href="#home" className="text-gray-800 dark:text-gray-100 hover:text-blue-700 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#projetos" className="text-gray-800 dark:text-gray-100 hover:text-blue-700 transition">
              Portfólios
            </a>
          </li>
          <li>
            <a href="#sobre" className="text-gray-800 dark:text-gray-100 hover:text-blue-700 transition">
              Sobre
            </a>
          </li>
          <li>
            <a href="#contato" className="text-gray-800 dark:text-gray-100 hover:text-blue-700 transition">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
