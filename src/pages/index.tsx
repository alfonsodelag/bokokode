import Head from "next/head";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.scss";
import { Header, Hero, Market } from "@/components";
import { useProducts } from "@/hooks";
import { useCategories } from "@/context/Category";
import { useSort } from "@/context/Sort";
import { useCart } from "@/context/Cart";

export default function Home() {
  const { categories } = useCategories();
  const { sort } = useSort();
  const { products, productsLoading, productsError } = useProducts();
  const { cart } = useCart();

  useEffect(() => {
    if (products) console.log("products", products);
  }, [products]);

  useEffect(() => {
    if (categories) console.log("categories", categories);
  }, [categories]);

  useEffect(() => {
    if (sort) console.log("sort", sort);
  }, [sort]);

  useEffect(() => {
    if (cart) console.log("cart", cart);
  }, [cart]);

  return (
    <>
      <Head>
        <title>E-commerce App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.section}>
          <Header cartCount={cart?.length} showCart={cart?.length > 0} />
        </div>
        {products?.featured[0]?.featured && (
          <div className={styles.section}>
            <Hero
              title={products?.featured[0]?.name}
              isPhotoOfTheDay={products?.featured[0]?.featured}
              description={products?.featured[0]?.description}
              category={products?.featured[0]?.category}
              picture={products?.featured[0]?.image?.src}
              people_also_buy={products?.featured[0]?.people_also_buy}
            />
          </div>
        )}
        <div className={styles.section}>
          <Market products={products?.items} loading={productsLoading} />
        </div>
      </div>
    </>
  );
}
