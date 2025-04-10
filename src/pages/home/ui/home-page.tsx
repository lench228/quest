import { Button } from "shared/ui/buttons/button";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const nav = useNavigate();

  const onButtonClick = () => {
    nav("/constructor");
  };

  return (
    <section className="m-auto h-screen flex flex-col justify-center items-center dark:bg-background">
      <Button onClick={onButtonClick}>Создать квест</Button>
      <p className={"font-extraBold text-2xl dark:text-additional text-background mt-10"}>Создайте уникальный квест</p>
    </section>
  );
};
