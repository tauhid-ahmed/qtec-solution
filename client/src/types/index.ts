// Products and Cart Types
export type ProductRating = {
  rate: number;
  count: number;
};

export type Product = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  ratings: ProductRating;
  views: number;
};

type CartItem = Product & {
  quantity: number;
};

type Cart = Record<string, CartItem>;

type BaseProductState = {
  products: Product[];
  cart: Cart;
};

// --- Product State ---
export type ProductState =
  | { status: "fetching" }
  | ({
      status: "idle";
    } & BaseProductState)
  | ({
      status: "cart_open";
    } & BaseProductState)
  | ({
      status: "checkout_open";
    } & BaseProductState)
  | {
      status: "error";
    };

// --- Events ---
export type Event =
  | {
      type: "ADD_TO_CART";
      payload: { productId: string };
    }
  | {
      type: "INCREASE_QUANTITY";
      payload: { productId: string };
    }
  | {
      type: "DECREASE_QUANTITY";
      payload: { productId: string };
    }
  | {
      type: "REMOVE_FROM_CART";
      payload: { productId: string };
    }
  | {
      type: "TOGGLE_CART";
    }
  | {
      type: "CLEAR_CART";
    }
  | {
      type: "OPEN_CHECKOUT_MODAL";
    }
  | {
      type: "CLOSE_CHECKOUT_MODAL";
    };
