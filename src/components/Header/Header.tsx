import React, { useState } from "react";
import styles from "@/styles/Header.module.scss";
import { HeaderProps } from "@/types";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartItems } from "@/components";
import { useCart } from "@/context/Cart";

const Header = ({ cartCount, showCart }: HeaderProps) => {
  const { cartOpen, setIsCartOpen } = useCart();

  return (
    <header className={styles.header}>
      <div>
        <img src="/logo.png" alt="logo" />
      </div>
      <div className={styles.cart__space}>
        {showCart && (
          <div className={styles.cart}>
            <span>{cartCount}</span>
          </div>
        )}
        <div className={styles.cart__icon}>
          <AiOutlineShoppingCart
            size={35}
            onClick={() => setIsCartOpen(true)}
          />
        </div>
        <CartItems cartOpen={cartOpen} setIsCartOpen={setIsCartOpen} />
      </div>
    </header>
  );
};

export default Header;
