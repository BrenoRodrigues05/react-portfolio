import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PortfoliosCardProps {
  title: string;
  description: string;
  content: string;
  footer: string;
  imageUrl?: string;
  technologies?: string[]; // badges
  details: string;
}

export function PortfoliosCard({
  title,
  description,
  content,
  footer,
  imageUrl,
  technologies,
  details,
}: PortfoliosCardProps) {
  const defaultImage = "/placeholder.svg"; // placeholder local

  return (
    <Card className="w-full max-w-sm h-[450px] flex flex-col border border-b-blue-600">
      {/* Imagem */}
      <div className="w-full h-48 relative overflow-hidden">
        <Image
          src={imageUrl || defaultImage}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Cabeçalho */}
      <CardHeader className="flex flex-col gap-1 px-4 pt-4 pb-2">
        <CardTitle className="text-base font-semibold line-clamp-1">
          {title}
        </CardTitle>
        <CardDescription className="text-sm line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>

      {/* Conteúdo + Badges */}
      <CardContent className="flex flex-col px-4 gap-2 flex-grow">
        <p className="text-sm line-clamp-3">{content}</p>

        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-1 border border-b-blue-600 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </CardContent>

      {/*Botão Detalhes*/}
      <div className="flex justify-center">
  <Button
    asChild
    className="bg-blue-600 hover:bg-amber-400 text-white dark:text-gray-900 font-medium px-6 py-2 rounded-lg transition-colors duration-300 text-base"
  >
    <a href={details}>Ver Portfólio</a>
  </Button>
</div>

      {/* Rodapé */}
      <CardFooter className="mt-auto px-4 py-2 border-t border-b-blue-600">
        <p className="text-xs">{footer}</p>
      </CardFooter>
    </Card>
  );
}
