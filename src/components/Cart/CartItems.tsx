import React from "react";
import styles from "@/styles/Cart.module.scss";
import { RxCross2 } from "react-icons/rx";
import { useCart } from "@/context/Cart";

const CartItems = ({ cartOpen, setIsCartOpen }: any) => {
  const { cart, clearCart } = useCart();
  return (
    <div
      className={`${styles.cart} ${
        cartOpen ? styles.cartOpen : styles.cartClose
      }`}
      id="grayScrollbar"
    >
      <div className={styles.cart__close}>
        <RxCross2
          size={25}
          onClick={() => setIsCartOpen(false)}
          className={styles.cart__close__icon}
        />
      </div>
      <div className={styles.cart__items}>
        {cart.length === 0 && (
          <div className={styles.cart__empty}>Cart is empty</div>
        )}
        {cart.map((item, index) => (
          <div key={index} className={styles.cart__item}>
            <div className={styles.cart__item__info}>
              <span className="p_name">
                {item.name.split(" ").slice(0, 2).join(" ")}
              </span>
              <span className="p_price">€&nbsp;{item.price}.00</span>
            </div>
            <img src={item.picture} alt={item.name} />
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className={styles.cart__clear}>
          <button className={styles.cart__clear__btn} onClick={clearCart}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default CartItems;
