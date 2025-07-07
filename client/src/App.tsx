import { useRouter } from "@/lib/router";
import { Homepage, ProductDetail } from "@/pages";

export default function App() {
  const { param, pathname } = useRouter();

  switch (pathname) {
    case "/":
      return <Homepage />;
    case `/product/${param}`:
      return <ProductDetail />;
    default:
      return <div>404 Not Found</div>;
  }
}
