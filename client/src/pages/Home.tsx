import { useProductContext } from "@/contexts/product-context";
import { useEffect, useState } from "react";
import Products from "../components/Products";
import { ProductCardSkeleton } from "@/components/ProductCard";

export default function Homepage() {
  const [products, setProducts] = useState([]);
  const { state, fetching, fetchSuccess, fetchError } = useProductContext();

  useEffect(() => {
    const fetchProducts = async () => {
      fetching();
      try {
        const response = await fetch(
          "https://qtec-solution.onrender.com/products"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const products = await response.json();
        setProducts(products);
        fetchSuccess();
      } catch (error) {
        if (error instanceof Error) {
          fetchError(error.message);
        }
      }
    };
    fetchProducts();
  }, []);

  if (state.status === "fetching") {
    return (
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-4 mt-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (state.status === "error") {
    return <div>{state.message}</div>;
  }

  return <Products products={products} />;
}
