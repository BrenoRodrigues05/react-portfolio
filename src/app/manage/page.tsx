"use client";

import { useState } from "react";
import { PortfoliosCard } from "../Components/PortfoliosCard";

export default function ViewPortfolios() {
  const [search, setSearch] = useState("");

  const [portfolios] = useState([
    {
      title: "Website Pessoal",
      description: "Portfólio moderno feito com Next.js e TailwindCSS.",
      content: "Este projeto apresenta animações suaves e design responsivo.",
      footer: "Janeiro de 2025",
      technologies: ["Next.js", "TailwindCSS", "TypeScript"],
    },
    {
      title: "Dashboard Admin",
      description: "Painel de controle com gráficos e autenticação.",
      content: "Desenvolvido com React, Supabase e Shadcn UI.",
      footer: "Março de 2025",
      technologies: ["React", "Supabase", "Shadcn UI"],
    },
    {
      title: "E-commerce Moderno",
      description: "Loja online completa com integração de pagamentos.",
      content: "Implementação de checkout, carrinho e produtos dinâmicos.",
      footer: "Abril de 2025",
      technologies: ["React", "Next.js", "Stripe"],
    },
    {
      title: "App Mobile",
      description: "Aplicativo mobile com React Native e Expo.",
      content: "Suporte offline, push notifications e integração com API.",
      footer: "Maio de 2025",
      technologies: ["React Native", "Expo", "Firebase"],
    },
  ]);

  // 🔍 Filtrar portfólios pelo título ou descrição
  const filteredPortfolios = portfolios.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="flex flex-col items-center p-6">
      {/* Título da Página */}
      <h1 className="text-3xl font-bold mb-8 text-center">
        Visualizar <span className="text-blue-600">Portfólios</span>
      </h1>

      {/* Campo de Busca */}
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
        <h2 className="text-3xl font-bold mb-8 ">Projetos <span className="
        text-blue-600">Cadastrados</span></h2>

        {filteredPortfolios.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            {filteredPortfolios.map((portfolio, index) => (
              <PortfoliosCard
                key={index}
                title={portfolio.title}
                description={portfolio.description}
                content={portfolio.content}
                footer={portfolio.footer}
                imageUrl={portfolio.imageUrl}
                technologies={portfolio.technologies}
              />
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
