import Image from "next/image"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface PortfoliosCardProps {
  title: string
  description: string
  content: string
  footer: string
  imageUrl?: string
  action?: string
}

export function PortfoliosCard({
  title,
  description,
  content,
  footer,
  imageUrl,
  action,
}: PortfoliosCardProps) {
  return (
    <Card className="w-full max-w-md shadow-lg overflow-hidden">
      {/* Imagem otimizada */}
      {imageUrl && (
        <div className="relative w-full h-48">
          <Image
            src={imageUrl}
            alt={title || "Imagem do portfólio"}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover border-b"
            priority
          />
        </div>
      )}

      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        {action && <CardAction>{action}</CardAction>}
      </CardHeader>

      <CardContent>
        <p>{content}</p>
      </CardContent>

      <CardFooter>
        <p>{footer}</p>
      </CardFooter>
    </Card>
  )
}
