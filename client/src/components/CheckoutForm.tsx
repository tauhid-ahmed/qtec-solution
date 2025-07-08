import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useProductContext } from "@/contexts/product-context";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

export default function CheckoutFormCheckoutForm() {
  const { state, closeCheckout, placeOrderOpen } = useProductContext();
  const isOpen = state.status === "checkout_open";
  return (
    <Dialog open={isOpen} onOpenChange={() => closeCheckout()}>
      <DialogTrigger className="opacity-0 absolute -left-[9999px]">
        Open
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="opacity-0 absolute -left-[9999px]"></DialogTitle>
          <DialogDescription>
            <form className="space-y-6">
              <div className="space-y-1">
                <Label>Name:</Label>
                <Input placeholder="Enter your name" />
              </div>
              <div className="space-y-1">
                <Label>Email:</Label>
                <Input placeholder="Enter your email" />
              </div>
              <div className="space-y-1">
                <Label>Address:</Label>
                <Textarea
                  placeholder="Enter your address"
                  className="min-h-32"
                />
              </div>
              <Button
                onClick={() => placeOrderOpen()}
                type="button"
                className="w-full"
              >
                Place Order
              </Button>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
