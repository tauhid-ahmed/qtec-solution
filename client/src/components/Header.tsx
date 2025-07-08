import Link from "./Link";
import CartSheet from "./Cart";
import Container from "./Container";

export default function Header() {
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-40">
      <Container>
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-xl">
              Shop
            </Link>
          </div>
          <div className="flex items-center">
            <CartSheet />
          </div>
        </div>
      </Container>
    </nav>
  );
}
