import InputLabel from "../../../shared/ui/input-label/ui/input-label.tsx";
import { BACKGROUND_PICK } from "../model/background-pick.ts";
import styles from "./background-pick.module.css";
import clsx from "clsx";

const BackgroundPick = () => {
  const bodyRef = document.querySelector("main");
  return (
    <div className={styles.wrapper}>
      <InputLabel label={BACKGROUND_PICK.LABEL} error={""} />
      <ul className={styles.backgroundList}>
        {BACKGROUND_PICK.BACKGROUND_COLORS.map((color) => (
          <li key={color.name} className={styles.container}>
            <input
              onChange={(e) => {}}
              type={"radio"}
              id={color.name}
              value={color.value}
              hidden={true}
              name={"color"}
            />
            <label
              className={clsx(styles.backgroundRadio)}
              htmlFor={color.name}
              style={{
                background: color.value,
              }}
            ></label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BackgroundPick;
