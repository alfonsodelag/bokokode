import React from "react";
import { FilterProps } from "@/types";
import styles from "@/styles/Filter.module.scss";
import { useCategories } from "@/context/Category";

const Filter = ({ name }: FilterProps) => {
  const { categories, setCategories } = useCategories();

  const toggleCategory = (category: string) => {
    if (categories.includes(category)) {
      setCategories(categories.filter((cat: any) => cat !== category));
    } else {
      setCategories([...categories, category]);
    }
  };

  return (
    <div className={styles.filter}>
      <input
        type="checkbox"
        name={name}
        checked={categories.includes(name)}
        onChange={() => toggleCategory(name)}
      />
      <span className={styles.title}>{name}</span>
    </div>
  );
};

export default Filter;
