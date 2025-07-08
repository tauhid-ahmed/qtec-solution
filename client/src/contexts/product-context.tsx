import { useContext, createContext } from "react";
import { useReducer } from "react";

import { type ProductState, type ProductEvent, type Product } from "@/types";
import { localstorage } from "@/utils/localstorage";

// Define context shape that includes state and all reducer-based actions
type ProductContext = {
  state: ProductState;
} & ReturnType<typeof useProductReducer>;

// Initial product state, loading cart from localStorage if available
const initialProductState: ProductState = {
  status: "fetching",
  cart: localstorage.getItem("cart") || {},
};

// Reducer: handles all product/cart related actions
function productReducer(
  state: ProductState,
  action: ProductEvent
): ProductState {
  switch (action.type) {
    // Starts loading state
    case "FETCHING": {
      return {
        ...state,
        status: "fetching",
      };
    }

    // Marks data successfully loaded
    case "FETCH_SUCCESS": {
      if (state.status !== "fetching") return state;
      return {
        ...state,
        status: "idle",
      };
    }

    // Handles error during fetching
    case "FETCH_ERROR": {
      if (state.status !== "fetching") return state;
      return {
        ...state,
        status: "error",
        message: action.payload.message,
      };
    }

    // Adds a product to cart or increases quantity
    case "ADD_TO_CART":
    case "INCREASE_QUANTITY": {
      const product = action.payload.product;
      const productId = product.id;
      const existingItem = state.cart[productId];

      const nextState = {
        ...state,
        cart: {
          ...state.cart,
          [productId]: {
            ...product,
            quantity: existingItem ? existingItem.quantity + 1 : 1,
          },
        },
      };

      localstorage.setItem("cart", nextState.cart);
      return nextState;
    }

    // Decreases quantity of product but not below 1
    case "DECREASE_QUANTITY": {
      if (state.status !== "cart_open" && state.status !== "view_product")
        return state;
      const product = action.payload.product;
      const productId = product.id;
      const existingItem = state.cart[productId];

      const nextState = {
        ...state,
        cart: {
          ...state.cart,
          [productId]: {
            ...product,
            quantity: existingItem ? Math.max(existingItem.quantity - 1, 1) : 1,
          },
        },
      };

      localstorage.setItem("cart", nextState.cart);
      return nextState;
    }

    // Removes a product from the cart
    case "REMOVE_FROM_CART": {
      if (state.status !== "cart_open") return state;
      const productId3 = action.payload.productId;
      const cartItems = { ...state.cart };
      delete cartItems[productId3];

      const nextState = {
        ...state,
        cart: {
          ...cartItems,
        },
      };

      localstorage.setItem("cart", nextState.cart);
      return nextState;
    }

    // Opens the cart
    case "CART_OPEN": {
      return {
        ...state,
        status: "cart_open",
      };
    }

    // Closes the cart
    case "CART_CLOSE":
      return {
        ...state,
        status: "idle",
      };

    // Opens the checkout screen
    case "OPEN_CHECKOUT": {
      return {
        ...state,
        status: "checkout_open",
      };
    }

    // Closes the checkout screen
    case "CLOSE_CHECKOUT": {
      return {
        ...state,
        status: "idle",
      };
    }

    case "PLACE_ORDER_OPEN": {
      localstorage.removeItem("cart");
      return {
        ...state,
        status: "place_order_open",
      };
    }

    case "PLACE_ORDER_CLOSE": {
      return {
        ...state,
        status: "idle",
      };
    }

    case "VIEW_PRODUCT": {
      return {
        ...state,
        status: "view_product",
      };
    }

    // Default: return current state
    default:
      return state;
  }
}

// Reducer wrapper with dispatcher helpers
export const useProductReducer = () => {
  const [state, dispatch] = useReducer(productReducer, initialProductState);

  // Dispatchers for each event
  const fetching = () => {
    dispatch({ type: "FETCHING" });
  };

  const fetchSuccess = () => {
    dispatch({ type: "FETCH_SUCCESS" });
  };

  const fetchError = (message: string) => {
    dispatch({
      type: "FETCH_ERROR",
      payload: { message },
    });
  };

  const addToCart = (product: Product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { product },
    });
  };

  const cartOpen = () => {
    dispatch({ type: "CART_OPEN" });
  };

  const cartClose = () => {
    dispatch({ type: "CART_CLOSE" });
  };

  const removeFromCart = (productId: string) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { productId },
    });
  };

  const increaseQuantity = (product: Product) => {
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: { product },
    });
  };

  const decreaseQuantity = (product: Product) => {
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: { product },
    });
  };

  const openCheckout = () => {
    dispatch({ type: "OPEN_CHECKOUT" });
  };

  const closeCheckout = () => {
    dispatch({ type: "CLOSE_CHECKOUT" });
  };

  // Place order open
  const placeOrderOpen = () => {
    dispatch({ type: "PLACE_ORDER_OPEN" });
  };

  // Place order close
  const placeOrderClose = () => {
    dispatch({ type: "PLACE_ORDER_CLOSE" });
  };

  const productView = () => {
    dispatch({ type: "VIEW_PRODUCT" });
  };

  return {
    state,
    dispatch,
    fetching,
    fetchSuccess,
    fetchError,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    cartOpen,
    cartClose,
    openCheckout,
    closeCheckout,
    placeOrderOpen,
    placeOrderClose,
    productView,
  };
};

// React context setup to share product state globally
const ProductContext = createContext<ProductContext | null>(null);

// Provider wraps around components that need product state
export function ProductProvider({ children }: React.PropsWithChildren) {
  const { state, dispatch, ...rest } = useProductReducer();

  return (
    <ProductContext.Provider value={{ state, dispatch, ...rest }}>
      {children}
    </ProductContext.Provider>
  );
}

// Hook to access product context anywhere in the app
export function useProductContext() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
}
