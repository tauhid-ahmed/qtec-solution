import {
  LucideMinus,
  LucidePlus,
  LucideShoppingCart,
  LucideTrash2,
} from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from "./ui/sheet";
import { useProductContext } from "@/contexts/product-context";
import { Badge } from "./ui/badge";
import { type CartItem } from "@/types";
import { Button } from "./ui/button";
import { toast } from "sonner";

export default function CartSheet() {
  const { state, cartOpen, cartClose, openCheckout } = useProductContext();

  const allCartItems = Object.values(state.cart).reduce(
    (acc, cur) => acc + cur.quantity,
    0
  );

  const totalPrice = Object.values(state.cart).reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  );

  const isOpen = state.status === "cart_open";

  return (
    <Sheet
      open={isOpen}
      onOpenChange={(open) => (open ? cartOpen() : cartClose())}
    >
      <SheetTrigger onClick={() => cartOpen()} className="relative">
        <LucideShoppingCart className="size-6" />
        <Badge className="size-4 absolute -top-2 -right-2">
          {allCartItems}
        </Badge>
      </SheetTrigger>
      <SheetContent className="w-96">
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
          <SheetDescription>Check out your cart</SheetDescription>
        </SheetHeader>
        <div className="px-4 flex-1 space-y-6 overflow-y-scroll">
          {Object.entries(state.cart).map(([key, value]) => (
            <CartItem key={key} product={value} />
          ))}
          {allCartItems === 0 && (
            <div className="flex-1 gap-4 size-full flex flex-col items-center justify-center">
              <LucideShoppingCart className="size-16 mx-auto" />
              <p className="text-center text-muted-foreground text-lg">
                Your cart is empty
              </p>
            </div>
          )}
        </div>
        <SheetFooter>
          <div className="flex justify-between text-lg border-t py-4">
            <span>Subtotal</span>
            <span className="font-bold">${totalPrice.toFixed(2)}</span>
          </div>
          <Button
            disabled={totalPrice <= 0}
            size="lg"
            onClick={() => {
              openCheckout();
            }}
          >
            Checkout
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

function CartItem({ product }: { product: CartItem }) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } =
    useProductContext();
  return (
    <div className="flex gap-4 items-center border-b py-4">
      <div className="size-20 shrink-0 shadow rounded">
        <img
          className="size-full object-cover"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="overflow-hidden flex-1">
        <h4 className="truncate font-medium text-base">{product.title}</h4>
        <h4 className="truncate mb-2 font-medium text-sm text-muted-foreground">
          ${(product.price * product.quantity).toFixed(2)}
        </h4>
        <div className="flex items-center">
          <Button
            onClick={() => decreaseQuantity(product)}
            variant="tertiary"
            size="icon"
            className="size-7"
          >
            <LucideMinus />
          </Button>
          <span className="inline-flex size-7 text-sm font-medium items-center justify-center">
            {product.quantity}
          </span>
          <Button
            onClick={() => increaseQuantity(product)}
            variant="tertiary"
            size="icon"
            className="size-7"
          >
            <LucidePlus />
          </Button>
        </div>
      </div>
      <Button
        onClick={() => {
          removeFromCart(product.id);
          toast.warning("Product removed from cart");
        }}
        size={"icon"}
        variant="tertiary"
      >
        <LucideTrash2 />
      </Button>
    </div>
  );
}
