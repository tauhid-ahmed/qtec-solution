import type { Product } from "@/types";
import AddToCartButton from "./AddToCartButton";
import Link from "./Link";
import {
  LucideEye,
  LucideHeart,
  LucideMinus,
  LucideMoveLeft,
  LucidePlus,
  LucideShare2,
  LucideStar,
} from "lucide-react";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { useProductContext } from "@/contexts/product-context";

type ProductDetailCardProps = {
  product: Product;
};

export default function ProductDetailCard({ product }: ProductDetailCardProps) {
  const { state, increaseQuantity, decreaseQuantity } = useProductContext();

  const cartProduct = Object.values(state.cart).find(
    (item) => item.id === product.id
  );

  return (
    <div className="py-4">
      <Button variant="link">
        <Link className="flex items-center gap-2" href="/">
          <LucideMoveLeft /> Back to products
        </Link>
      </Button>
      <div className="flex flex-col md:flex-row flex-wrap gap-8 justify-between mt-4">
        <div className="flex-1 flex items-center justify-center rounded-2xl shadow p-8 bg-secondary">
          <img
            className="max-h-96 aspect-square object-cover"
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className="flex-1 space-y-6">
          <div className="flex justify-between gap-2">
            <Badge variant="secondary" className="capitalize">
              {product.category}
            </Badge>
            <Badge variant="outline">
              <LucideEye />
              {product.views} views
            </Badge>
          </div>
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold">{product.title}</h2>
              <div className="flex gap-2 items-center">
                <span className="flex text-amber-500">
                  <LucideStar size="20" />
                  <LucideStar size="20" />
                  <LucideStar size="20" />
                  <LucideStar size="20" />
                  <LucideStar size="20" />
                </span>
                <strong>{product.rating?.rate}</strong>
                <span className="text-sm text-muted-foreground">
                  ({product.rating?.count} reviews)
                </span>
              </div>
              <span className="text-3xl font-medium block text-blue-500">
                ${product.price?.toFixed(2)}
              </span>
            </div>
            <Separator />
            <div className="">
              <h4 className="font-semibold text-lg">Description</h4>
              <p className="mt-2">{product.description}</p>
            </div>
            <Separator />
            <div className="flex items-center gap-2">
              <span className="font-semibold">Quantity:</span>
              <div className="flex items-center border rounded-xl overflow-hidden">
                <Button
                  onClick={() => decreaseQuantity(product)}
                  variant="ghost"
                  size="icon"
                >
                  <LucideMinus />
                </Button>
                <span className="px-4 py-2">{cartProduct?.quantity || 0}</span>
                <Button
                  onClick={() => increaseQuantity(product)}
                  variant="ghost"
                  size="icon"
                >
                  <LucidePlus />
                </Button>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <AddToCartButton className="flex-1" product={product} />
              <Button variant="secondary">
                <LucideHeart />
              </Button>
              <Button variant="secondary">
                <LucideShare2 />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductDetailSkeleton() {
  return (
    <div className="py-4">
      <Button variant="link">
        <Link className="flex items-center gap-2" href="/">
          <LucideMoveLeft /> Back to products
        </Link>
      </Button>
      <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-between mt-4">
        <div className="flex-1">
          <Skeleton className="h-96" />
        </div>

        <div className="flex-1 space-y-4">
          <Skeleton className="h-10" />
          <Skeleton className="h-14 w-40" />
          <Skeleton className="h-10 w-32" />
          <Skeleton className="h-32" />
          <Skeleton className="h-10" />
          <Skeleton className="h-8 w-24" />
        </div>
      </div>
    </div>
  );
}
