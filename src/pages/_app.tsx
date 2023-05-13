import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { CategoriesProvider } from "@/context/Category";
import { SortProvider } from "@/context/Sort";
import { PageProvider } from "@/context/Page";
import { CartProvider } from "@/context/Cart";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CategoriesProvider>
      <SortProvider>
        <PageProvider>
          <CartProvider>
            <Component {...pageProps} />
          </CartProvider>
        </PageProvider>
      </SortProvider>
    </CategoriesProvider>
  );
}
