import useSWR from "swr";
import { nextApi } from "@/config";
import { fetcher } from "@/utils";
import { useCategories } from "@/context/Category";
import { useSort } from "@/context/Sort";
import { usePage } from "@/context/Page";

export const useProducts = () => {
  const { categories } = useCategories();
  const { sort } = useSort();
  const { page } = usePage();

  const categoriesQuery = categories
    .map((cat) => `categories=${cat}`)
    .join("&");

  const sortQuery = `sort=key:${sort.key},type:${sort.type}`;

  const { data, error } = useSWR(
    `${nextApi}/get-products?${categoriesQuery}&${sortQuery}&page=${page}`,
    fetcher
  );

  return {
    products: data,
    productsLoading: !error && !data,
    productsError: error,
  };
};
