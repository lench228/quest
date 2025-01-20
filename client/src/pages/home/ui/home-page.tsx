import { Button } from "../../../shared/ui/buttons/button/button.tsx";
import styles from "./home-page.module.css";
import clsx from "clsx";

export const HomePage = () => {
  const onButtonClick = () => {};

  return (
    <fieldset className={clsx(styles.home)}>
      <Button onClick={onButtonClick}>Создать квест</Button>
    </fieldset>
  );
};
