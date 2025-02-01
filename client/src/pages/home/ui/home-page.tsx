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
    <section className={clsx(styles.container)}>
      <Button onClick={onButtonClick}>Создать квест</Button>
      <p className={styles.text}>Создайте уникальный квест</p>
    </section>
  );
};
