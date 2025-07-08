import ProductDetailCard, {
  ProductDetailSkeleton,
} from "@/components/ProductDetailCard";
import { useRouter } from "@/lib/router";
import { useProductContext } from "@/contexts/product-context";
import type { Product } from "@/types";
import { useEffect, useState } from "react";

export default function ProductDetail() {
  const [product, setProduct] = useState({});
  const { param } = useRouter();
  const { state, fetching, fetchSuccess, fetchError } = useProductContext();

  useEffect(() => {
    const fetchProducts = async () => {
      fetching();
      try {
        const response = await fetch(
          `https://qtec-solution.onrender.com/product/${param}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const products = await response.json();
        setProduct(products);
        fetchSuccess();
      } catch (error) {
        if (error instanceof Error) {
          fetchError(error.message);
        }
      }
    };
    if (param) {
      fetchProducts();
    }
  }, [param]);

  if (state.status === "initial" || state.status === "fetching") {
    return <ProductDetailSkeleton />;
  }

  if (state.status === "error") {
    return <div>Error: {state.message}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductDetailCard product={product as Product} />;
}
