import { Button } from "../../../shared/ui/buttons/button/button.tsx";
import styles from "./home-page.module.css";
import clsx from "clsx";
import Input from "../../../shared/ui/input/input.tsx";
export const HomePage = () => {
  const onButtonClick = () => {};

  return (
    <section className={clsx(styles.home)}>
      <Button onClick={onButtonClick}>Создать квест</Button>
      <Input
        id={"name"}
        placeholder={"Название"}
        label={"Название"}
        validate={(text: string) =>
          text.length < 10 ? "" : "Слишком длинное название"
        }
      />
    </section>
  );
};
