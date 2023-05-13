import React, { useState } from "react";
import styles from "@/styles/Market.module.scss";
import { BiSort } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsFilterSquare } from "react-icons/bs";
import {
  ProductTile,
  Filter,
  Pagination,
  Loader,
  Filter_Mobile,
} from "@/components";
import { filters } from "../data";
import { MarketProps } from "@/types";
import { useSort } from "@/context/Sort";
import { useCart } from "@/context/Cart";

const Market = ({ products, loading }: MarketProps) => {
  const { sort, setSort } = useSort();
  const { addToCart } = useCart();
  const [showFilter, setShowFilter] = useState(false);

  const handleAddToCart = (product: any) => {
    addToCart({
      name: product.name,
      price: product.price,
      picture: product.image?.src,
    });
  };

  if (loading) return <Loader />;
  return (
    <div className={styles.market}>
      <div className={styles.market__row}>
        <h1>
          Photography&nbsp; / <span>Premium Photos</span>
        </h1>
        <BsFilterSquare
          className={styles.filter__mobile__toggle}
          size={20}
          onClick={() => {
            setShowFilter(true);
          }}
        />
        <Filter_Mobile
          filters={filters}
          isOpen={showFilter}
          setIsOpen={setShowFilter}
        />
        <div className={styles.market__right__desktop}>
          <BiSort />
          <span>Sort By</span>
          <div className={styles.dropdown}>
            <h6>
              {sort.key === ""
                ? "Select"
                : sort.key === "price"
                ? "Price"
                : "Name"}
            </h6>
            <RiArrowDropDownLine size={35} />
            <div className={styles.dropdown__content}>
              <button
                onClick={() => {
                  setSort({ key: "price", type: "ASC" });
                }}
              >
                Price
              </button>
              <button
                onClick={() => {
                  setSort({ key: "name", type: "ASC" });
                }}
              >
                Name
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.market__body}>
        <div className={styles.market__body__filters__desktop}>
          <h2>Category</h2>
          {filters.map((filter) => (
            <Filter name={filter} key={filter} />
          ))}
        </div>
        <div className={styles.market__body__products}>
          {products?.map((product: any) => (
            <ProductTile
              key={product._id}
              category={product.category}
              name={product.name.split(" ").slice(0, 4).join(" ")}
              price={product.price}
              picture={product.image.src}
              isBestSeller={product.bestseller}
              addToCart={() => handleAddToCart(product)}
            />
          ))}
        </div>
        <div className={styles.market__pagination}>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Market;
