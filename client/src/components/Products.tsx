import type { Product } from "@/types";
import ProductCard from "./ProductCard";

type ProductsProps = {
  products: Product[];
};

export default function Products({ products }: ProductsProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-4 mt-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
