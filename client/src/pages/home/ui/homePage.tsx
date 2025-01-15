export const HomePage = () => {
  return (
    <div>
      <p className={"font-light"}>Текст 1 легкий</p>
      <p className={"font-regular"}>Текст 2 обычный</p>
      <p className={"font-medium"}>Текст 3 средний</p>
      <p className={"font-bold"}>Текст 4 жирный</p>
      <p className={"font-extraBold"}>Тексsssт 5 очень жирный</p>
      <input type={"color"}></input>

      <div className="text-center text-blue-500">TailwindCSS работает!</div>
    </div>
  );
};
