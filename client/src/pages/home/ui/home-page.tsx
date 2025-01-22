import { Button } from "../../../shared/ui/buttons/button/button.tsx";
import styles from "./home-page.module.css";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const nav = useNavigate();

  const onButtonClick = () => {
    nav("/constructor");
  };

  return (
    <section className={clsx(styles.home)}>
      <Button onClick={onButtonClick}>Создать квест</Button>
      <p
        className={
          "font-extraBold text-2xl dark:text-additional text-background mt-10"
        }
      >
        Создайте уникальный квест
      </p>
    </section>
  );
};
