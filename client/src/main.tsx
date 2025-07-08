import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "./lib/router";
import App from "./App";
import { ProductProvider } from "./contexts/product-context";
import Header from "./components/Header";
import Container from "./components/Container";
import CheckoutForm from "./components/CheckoutForm";
import { Toaster } from "@/components/ui/sonner";
import PlaceOrderAlert from "./components/PlaceOrderAlert";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider>
      <ProductProvider>
        <Header />
        <Container>
          <App />
        </Container>
        <Toaster position="bottom-left" />
        <CheckoutForm />
        <PlaceOrderAlert />
      </ProductProvider>
    </RouterProvider>
  </StrictMode>
);
