
interface iPaginatorSlides {
  order: number;
  total: number;
}

const PaginatorSlides = (props: iPaginatorSlides) => {
  const { order, total } = props;
  return (
    <p className={" absolute top-2 left-2 dark:text-white font-medium text-sm bg-gray-100 dark:bg-grey px-2 py-1 rounded-md"}>
      {order}/{total}
    </p>
  );
};

export { PaginatorSlides };
