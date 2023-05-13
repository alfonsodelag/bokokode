import React from "react";
import { PreviewProps } from "@/types";
import styles from "@/styles/Preview.module.scss";

const Preview = ({
  category,
  name,
  price,
  picture,
  isBestSeller,
  addToCart,
}: PreviewProps) => {
  const productName = name.split(" ").slice(0, 2).join(" ");

  return (
    <div className={styles.preview}>
      <div className={styles.preview__image__container}>
        <img src={picture} alt="product" />
        <button className={styles.addToCart} onClick={addToCart}>
          Add to Cart
        </button>
      </div>
      <div className={styles.preview__info}>
        <span className="p_category">{category}</span>
        <span className="p_name">{productName}</span>
        <span className="p_price">€&nbsp;{price}.00</span>
      </div>
      {isBestSeller && <p>Best Seller</p>}
    </div>
  );
};

export default Preview;
