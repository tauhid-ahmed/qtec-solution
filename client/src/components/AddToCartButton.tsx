import { useProductContext } from "@/contexts/product-context";
import { Button } from "./ui/button";
import type { Product } from "@/types";
import { toast } from "sonner";
import { buttonVariants } from "./ui/button";
import type { VariantProps } from "class-variance-authority";

type AddToCartButtonProps = {
  product: Product;
} & React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>;

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
