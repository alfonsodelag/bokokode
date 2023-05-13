import React from "react";
import { ProductTileProps } from "@/types";
import styles from "@/styles/ProductTile.module.scss";

const ProductTile = ({
  category,
  name,
  price,
  picture,
  isBestSeller,
  addToCart,
}: ProductTileProps) => {
  return (
    <div className={styles.product}>
      <div className={styles.product__image__container}>
        <img src={picture} alt="product" />
        <button className={styles.addToCart} onClick={addToCart}>
          Add to Cart
        </button>
      </div>
      <div className={styles.product__info}>
        <span className="p_category">{category}</span>
        <span className="p_name">{name}</span>
        <span className="p_price">€&nbsp;{price}.00</span>
      </div>
      {isBestSeller && <p>Best Seller</p>}
    </div>
  );
};

export default ProductTile;
