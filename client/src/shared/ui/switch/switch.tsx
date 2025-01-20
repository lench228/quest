import styles from "./switch.module.css";
import { RadioButton } from "../buttons/radio-button/radio-button.tsx";
import { v4 as uuidv4 } from "uuid";
interface iSwitch {
  name: string;
  values: { text: string; value: string }[];
}

export const Switch = (props: iSwitch) => {
  const { name, values } = props;

  return (
    <form className={styles.switch}>
      {values.map((text) => (
        <RadioButton
          key={text.value}
          name={name}
          text={text.text}
          id={uuidv4()}
          value={text.value}
        ></RadioButton>
      ))}
    </form>
  );
};
