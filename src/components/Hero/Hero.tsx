import React from "react";
import { Preview } from "@/components";
import styles from "@/styles/Hero.module.scss";
import { HeroProps } from "@/types";
import { useCart } from "@/context/Cart";

const Hero = ({
  title,
  isPhotoOfTheDay,
  description,
  category,
  picture,
  people_also_buy,
}: HeroProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (product: any) => {
    addToCart({
      name: product.name,
      price: product.price,
      picture: product.image?.src,
    });
  };

  return (
    <div className={styles.hero}>
      <div className={styles.hero__row}>
        <span className={styles.hero__row__title}>
          {title.split(" ").slice(0, 4).join(" ")}
        </span>
        <button
          className={styles.hero__row__btn}
          onClick={() => {
            addToCart({
              name: title,
              price: 0,
              picture: picture,
            });
          }}
        >
          Add to cart
        </button>
      </div>
      {isPhotoOfTheDay && (
        <div className={styles.hero__img}>
          <img src={picture} alt="hero" />
          <span>Photo of the day</span>
        </div>
      )}
      <button
        className={styles.mobile__btn}
        onClick={() => {
          addToCart({
            name: title,
            price: 0,
            picture: picture,
          });
        }}
      >
        Add to cart
      </button>
      <div className={styles.hero__about}>
        <div className={styles.hero__about__row}>
          <span>About the {title}</span>
          <span className={styles.desktop__line}>People also buy</span>
        </div>

        <div className={styles.hero__about__info}>
          <div className={styles.hero__about__info__left}>
            <span>{category}</span>
            <p>{description}</p>
          </div>
          <span className={styles.mobile__line}>People also buy</span>
          <div className={styles.hero__about__info__right}>
            <div className={styles.hero__about__info__right__grid}>
              {people_also_buy?.map((item: any) => (
                <Preview
                  key={item._id}
                  category={item.category}
                  name={item.name}
                  price={item.price}
                  picture={item.image.src}
                  isBestSeller={item.bestseller}
                  addToCart={() => handleAddToCart(item)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
