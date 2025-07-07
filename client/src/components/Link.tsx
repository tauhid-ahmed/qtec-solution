import { useRouter } from "@/lib/router";
import { cn } from "@/lib/utils";

type LinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function Link({ href, children, className }: LinkProps) {
  const { push } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    push(href);
  };

  return (
    <a href={href} onClick={handleClick} className={cn("", className)}>
      {children}
    </a>
  );
}
