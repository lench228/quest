import styles from "./paginator-slides.module.css";

interface iPaginatorSlides {
  order: number;
  total: number;
}

const PaginatorSlides = (props: iPaginatorSlides) => {
  const { order, total } = props;
  return (
    <p className={styles.paginator}>
      {order}/{total}
    </p>
  );
};

export { PaginatorSlides };
