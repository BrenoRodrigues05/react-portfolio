"use client";

import { useState } from "react";
import { PortfoliosCard } from "@/app/Components/PortfoliosCard";

export default function ManagePortfolios() {
  const [search, setSearch] = useState("");

  const [portfolios] = useState([
    {
      id: "1",
      title: "Website Pessoal",
      description: "Portfólio moderno feito com Next.js e TailwindCSS.",
      content: "Este projeto apresenta animações suaves e design responsivo.",
      footer: "Janeiro de 2025",
      imageUrl: "/placeholder.svg",
      technologies: ["Next.js", "TailwindCSS", "TypeScript"],
      details: "/manage/1",
    },
    {
      id: "2",
      title: "Dashboard Admin",
      description: "Painel de controle com gráficos e autenticação.",
      content: "Desenvolvido com React, Supabase e Shadcn UI.",
      footer: "Março de 2025",
      imageUrl: "/placeholder.svg",
      technologies: ["React", "Supabase", "Shadcn UI"],
      details: "/manage/2",
    },
    {
      id: "3",
      title: "E-commerce Moderno",
      description: "Loja online completa com integração de pagamentos.",
      content: "Implementação de checkout, carrinho e produtos dinâmicos.",
      footer: "Abril de 2025",
      imageUrl: "/placeholder.svg",
      technologies: ["React", "Next.js", "Stripe"],
      details: "/manage/3",
    },
  ]);

  const filteredPortfolios = portfolios.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Visualizar <span className="text-blue-600">Portfólios</span>
      </h1>

      {/* Campo de busca */}
      <div className="w-full max-w-2xl mb-10">
        <input
          type="text"
          placeholder="🔍 Buscar portfólio por nome ou descrição..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
        />
      </div>

      {/* Lista de Portfólios */}
      <section className="w-full max-w-6xl">
        <h2 className="text-3xl font-bold mb-8">
          Projetos <span className="text-blue-600">Cadastrados</span>
        </h2>

        {filteredPortfolios.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            {filteredPortfolios.map((portfolio) => (
              <PortfoliosCard key={portfolio.id} {...portfolio} />
            ))}
          </div>
        ) : (
          <div className="text-center mt-12">
            <p className="text-4xl font-bold">Nenhum portfólio encontrado 😢</p>
            <p className="text-lg mt-4">Tente buscar outro termo...</p>
          </div>
        )}
      </section>
    </main>
  );
}
