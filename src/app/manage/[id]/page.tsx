"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface PortfolioParams {
  params: {
    id: string;
  };
}

export default function PortfolioDetails({ params }: PortfolioParams) {
  const { id } = params;

  // Buscar portfólio pelo ID
   const portfolios = [
    {
      id: "1",
      title: "Website Pessoal",
      description: "Portfólio moderno feito com Next.js e TailwindCSS.",
      content:
        "Detalhes completos do projeto, incluindo arquitetura, tecnologias e desafios superados. Este projeto foi desenvolvido para demonstrar proficiência em front-end moderno, design responsivo e integração com ferramentas de build eficientes.",
      footer: "Janeiro de 2025",
      imageUrl: "/placeholder.svg",
      technologies: ["Next.js", "TailwindCSS", "TypeScript"],
    },
    {
      id: "2",
      title: "Dashboard Admin",
      description: "Painel de controle com gráficos e autenticação.",
      content:
        "Sistema de administração com gráficos interativos, autenticação JWT e integração com Supabase.",
      footer: "Março de 2025",
      imageUrl: "/placeholder.svg",
      technologies: ["React", "Supabase", "Shadcn UI"],
    },
    {
      id: "3",
      title: "E-commerce Moderno",
      description: "Loja online completa com integração de pagamentos.",
      content:
        "Loja moderna com integração Stripe, carrinho persistente e gerenciamento de produtos via API.",
      footer: "Abril de 2025",
      imageUrl: "/placeholder.svg",
      technologies: ["React", "Next.js", "Stripe"],
    },
  ];

   // Buscar portfólio pelo ID
  const portfolio = portfolios.find((p) => p.id === id);

  // Caso o ID não exista
  if (!portfolio) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
        <h1 className="text-3xl font-bold mb-4 text-red-600">Portfólio não encontrado</h1>
        <Link href="/manage">
          <Button className="bg-blue-600 hover:bg-amber-400 text-white dark:text-gray-900 font-medium px-6 py-2 rounded-lg">
            ← Voltar
          </Button>
        </Link>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center px-6 py-10 min-h-screen pt-24 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 transition-colors">
      
      {/* Header com botão voltar e título centralizado */}
      <header className="w-full max-w-4xl flex items-center justify-between mb-8 relative">
        {/* Botão Voltar */}
        <Link href="/manage">
          <Button
            variant="ghost"
            className="text-sm md:text-base border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300"
          >
            ← Voltar
          </Button>
        </Link>

        {/* Título centralizado sem quebrar o layout */}
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-xl md:text-3xl font-bold text-blue-600 dark:text-amber-50 text-center">
          {portfolio.title}
        </h1>
      </header>

      {/* Card principal */}
      <section className="w-full max-w-4xl bg-white dark:bg-gray-900 shadow-lg rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 transition-all">
        {/* Imagem */}
        <div className="relative w-full h-60 md:h-80">
          <Image
            src={portfolio.imageUrl}
            alt={portfolio.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Conteúdo */}
        <div className="p-6 md:p-8 flex flex-col gap-6">
          <div>
            <p className="text-lg md:text-xl font-semibold text-blue-600 mb-2">
              {portfolio.description}
            </p>
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              {portfolio.content}
            </p>
          </div>

          {/* Tecnologias */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Tecnologias Utilizadas:
            </h2>
            <div className="flex flex-wrap gap-2">
              {portfolio.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Footer */}
          <p className="text-sm text-muted-foreground border-t pt-4">
            Publicado em: {portfolio.footer}
          </p>

          {/* Botão de Ação */}
          <div className="flex justify-center">
            <Link href="">
            <Button
              className="bg-blue-600 hover:bg-amber-400 text-white "
            >
              Ver Projeto no GitHub
            </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
