import { useProductContext } from "@/contexts/product-context";
import { Button } from "./ui/button";
import type { Product } from "@/types";
import { toast } from "sonner";

type AddToCartButtonProps = {
  product: Product;
} & React.HTMLAttributes<HTMLButtonElement>;

export default function AddToCartButton({
  product,
  className,
  ...props
}: AddToCartButtonProps) {
  const { addToCart } = useProductContext();
  return (
    <Button
      className={className}
      onClick={() => {
        addToCart(product);
        toast.success("Product added to cart");
      }}
      {...props}
    >
      Add to cart
    </Button>
  );
}
