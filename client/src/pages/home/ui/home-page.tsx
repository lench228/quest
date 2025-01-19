import { Button } from "../../../shared/ui/buttons/button/button.tsx";
import styles from "./home-page.module.css";
import clsx from "clsx";
export const HomePage = () => {
  const onButtonClick = () => {};

  return (
    <section className={clsx(styles.home)}>
      <Button onClick={onButtonClick}>Создать квест</Button>
    </section>
  );
};
