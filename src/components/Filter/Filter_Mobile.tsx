import React from "react";
import styles from "@/styles/Filter_Mobile.module.scss";
import { RxCross2 } from "react-icons/rx";
import { useCategories } from "@/context/Category";
import { Filter_MobileProps } from "@/types";

const Filter_Mobile = ({ filters, isOpen, setIsOpen }: Filter_MobileProps) => {
  const { categories, setCategories } = useCategories();

  const toggleCategory = (category: string) => {
    if (categories.includes(category)) {
      setCategories(categories.filter((cat: any) => cat !== category));
    } else {
      setCategories([...categories, category]);
    }
  };

  const clearCategories = () => {
    setCategories([]);
  };

  const handleSave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`${styles.filter} ${
        isOpen ? styles.filter__main__open : styles.filter__main__close
      }`}
    >
      <div className={styles.filter__row}>
        <span
          style={{
            color: "#000",
          }}
        >
          Filter
        </span>
        <RxCross2
          size={25}
          className={styles.filter__close}
          onClick={() => {
            setIsOpen(false);
          }}
        />
      </div>
      {filters?.map((filter: any) => (
        <div className={styles.filter__items__row}>
          <input
            type="checkbox"
            name={filter}
            checked={categories.includes(filter)}
            onChange={() => toggleCategory(filter)}
          />
          <span className={styles.title}>{filter}</span>
        </div>
      ))}
      <div className={styles.filter__close__row}>
        <button className={styles.close__clear} onClick={clearCategories}>
          Clear
        </button>
        <button className={styles.close__save} onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Filter_Mobile;
