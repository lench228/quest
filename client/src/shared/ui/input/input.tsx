import React, { ChangeEvent } from "react";
import { UseLocalStorage } from "../../hooks/useLocalStorage.tsx";
import styles from "./input.module.css";

interface iInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  validate: (value: string) => string;
  id: string;
}

const Input = (props: iInput) => {
  const { placeholder, label, validate, id, ...rest } = props;

  const [value, setValue] = UseLocalStorage(id, "");
  const [error, setError] = UseLocalStorage("ERROR_" + id, "");

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const eventValue = e.target.value;
    setValue(eventValue);
    const error = validate(value);

    if (error) {
      setError(error);
    } else setError("");
  };

  return (
    <div className={styles.container} data-error={error ? "true" : "false"}>
      <label className={styles.label}>{error ? error : label}</label>
      <input
        onChange={(e) => handleInput(e)}
        className={styles.input}
        placeholder={placeholder}
        value={value}
        id={id}
        {...rest}
      />
    </div>
  );
};

export default Input;
