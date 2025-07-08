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
  rating: ProductRating;
  views: number;
  price: number;
};

export type CartItem = Product & {
  quantity: number;
};

export type Cart = Record<Product["id"], CartItem>;

type BaseProductState = {
  cart: Cart;
};

// --- Product State ---
export type ProductState =
  | ({ status: "initial" } & BaseProductState)
  | ({ status: "fetching" } & BaseProductState)
  | ({ status: "idle" } & BaseProductState)
  | ({ status: "view_product" } & BaseProductState)
  | ({ status: "cart_open" } & BaseProductState)
  | ({ status: "checkout_open" } & BaseProductState)
  | ({ status: "place_order_open" } & BaseProductState)
  | ({ status: "error"; message: string } & BaseProductState);

// --- Product Events ---
export type ProductEvent =
  | { type: "FETCHING" }
  | { type: "FETCH_SUCCESS" }
  | { type: "FETCH_ERROR"; payload: { message: string } }
  | { type: "VIEW_PRODUCT" }
  | { type: "CLEAR_SELECTED_PRODUCT" }
  | { type: "ADD_TO_CART"; payload: { product: Product } }
  | { type: "REMOVE_FROM_CART"; payload: { productId: string } }
  | { type: "CART_OPEN" }
  | { type: "CART_CLOSE" }
  | { type: "CLEAR_CART" }
  | { type: "INCREASE_QUANTITY"; payload: { product: Product } }
  | { type: "DECREASE_QUANTITY"; payload: { product: Product } }
  | { type: "OPEN_CHECKOUT" }
  | { type: "CLOSE_CHECKOUT" }
  | { type: "PLACE_ORDER_OPEN" }
  | { type: "PLACE_ORDER_CLOSE" };
