"use client"

import { useState } from "react"
import { PortfoliosCard } from "../Components/PortfoliosCard"
import { Span } from "next/dist/trace"

export default function Create() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    content: "",
    footer: "",
    imageUrl: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Novo portfólio criado:", form)
  }

  return (
    <main className="flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-8">Criar <span className= "text-blue-600">Portfólio</span></h1>

      <div className="flex flex-col md:flex-row justify-center gap-10 w-full max-w-5xl">
        {/* Formulário */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full md:w-1/2 p-6 border rounded-xl shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Informações do Portfólio</h2>

          <input
            type="text"
            name="title"
            placeholder="Título"
            value={form.title}
            onChange={handleChange}
            className="p-2 border rounded"
          />

          <input
            type="text"
            name="description"
            placeholder="Descrição"
            value={form.description}
            onChange={handleChange}
            className="p-2 border rounded"
          />

          <input
            type="text"
            name="content"
            placeholder="Conteúdo"
            value={form.content}
            onChange={handleChange}
            className="p-2 border rounded"
          />

          <input
            type="text"
            name="footer"
            placeholder="Rodapé"
            value={form.footer}
            onChange={handleChange}
            className="p-2 border rounded"
          />

          <input
            type="text"
            name="imageUrl"
            placeholder="URL da Imagem"
            value={form.imageUrl}
            onChange={handleChange}
            className="p-2 border rounded"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-amber-400 transition"
          >
            Salvar
          </button>
        </form>

        {/* Pré-visualização */}
        <div className="flex flex-col items-center gap-4 w-full md:w-1/2">
          <h2 className="text-xl font-semibold">Pré-visualização</h2>
          <PortfoliosCard
            title={form.title || "Título do Portfólio"}
            description={form.description || "Descrição do Portfólio"}
            content={form.content || "Conteúdo do Portfólio"}
            footer={form.footer || "Rodapé do Portfólio"}
            imageUrl={form.imageUrl || undefined}
          />
        </div>
      </div>
    </main>
  )
}
