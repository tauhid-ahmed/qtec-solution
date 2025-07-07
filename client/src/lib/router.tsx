import { createContext, useContext, useEffect, useState } from "react";

type RouterContextType = {
  push: (pathname: string) => void;
  pathname: string;
  param?: string;
};

const RouterContext = createContext<RouterContextType>({
  push: () => {},
  pathname: location.pathname,
  param: undefined,
});

export function RouterProvider({ children }: React.PropsWithChildren) {
  const [pathname, setPathname] = useState(location.pathname);
  const param = pathname.split("/").pop();

  const push = (pathname: string) => {
    history.pushState({}, "", pathname);
    setPathname(pathname);
  };

  useEffect(() => {
    const onPopstate = () => setPathname(location.pathname);
    window.addEventListener("popstate", onPopstate);
    return () => window.removeEventListener("popstate", onPopstate);
  }, []);

  return (
    <RouterContext.Provider value={{ push, param, pathname }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context)
    throw new Error("useRouter must be used within a RouterProvider");
  return context;
}
