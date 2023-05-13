import React from "react";
import styles from "@/styles/Pagination.module.scss";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { usePage } from "@/context/Page";

const Pagination = () => {
  const { page, setPage } = usePage();

  const handlePrevPage = () => {
    setPage(page > 1 ? page - 1 : 1);
  };

  const handleNextPage = () => {
    setPage(page < 9 ? page + 1 : 9);
  };

  return (
    <div className={styles.pagination}>
      <GrLinkPrevious
        size={15}
        onClick={handlePrevPage}
        className={styles.pagination__btn}
      />
      <GrLinkNext
        size={15}
        onClick={handleNextPage}
        className={styles.pagination__btn}
      />
    </div>
  );
};

export default Pagination;
