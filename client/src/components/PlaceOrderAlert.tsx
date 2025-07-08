import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useProductContext } from "@/contexts/product-context";
import { LucideCheckCircle } from "lucide-react";

export default function PlaceOrderAlert() {
  const { state, placeOrderClose } = useProductContext();
  const isOpen = state.status === "place_order_open";
  return (
    <Dialog open={isOpen} onOpenChange={() => placeOrderClose()}>
      <DialogTrigger className="opacity-0 absolute -left-[9999px]">
        Open
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="opacity-0 absolute -left-[9999px]"></DialogTitle>
          <DialogDescription className="text-center py-10">
            <span className="bg-emerald-500 flex items-center justify-center mx-auto size-24 rounded-full">
              <LucideCheckCircle size={48} className="text-white" />
            </span>
            <h3 className="font-bold text-2xl mt-4">
              Order placed successfully
            </h3>
            <p className="text-lg">Thank you for your order</p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
