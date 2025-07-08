import type { Product } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Link from "./Link";
import AddToCartButton from "./AddToCartButton";
import { Skeleton } from "@/components/ui/skeleton";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="text-center hover:-translate-y-0.5 transition-transform duration-300">
      <CardHeader className="relative">
        <img
          className="h-40 aspect-square mx-auto object-cover"
          src={product.image}
          alt={product.title}
        />
        <CardTitle className="truncate mt-4">
          <Link
            className="before:absolute before:inset-0"
            href={`/product/${product.id}`}
          >
            {product.title}
          </Link>
        </CardTitle>
        <p>${product.price}</p>
      </CardHeader>
      <CardContent>
        <AddToCartButton product={product} />
      </CardContent>
    </Card>
  );
}

export function ProductCardSkeleton() {
  return (
    <Card className="flex flex-col items-center">
      <Skeleton className="h-40 w-full" />
      <Skeleton className="h-8 w-3/4" />
      <Skeleton className="h-6 w-20" />
      <Skeleton className="h-6 w-32" />
    </Card>
  );
}
