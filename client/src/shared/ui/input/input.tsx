import React, { ChangeEvent } from "react";
import styles from "./input.module.css";

interface iInput extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  handleInput(e: ChangeEvent<HTMLInputElement>): void;
}

const Input = (props: iInput) => {
  const { placeholder, id, handleInput, ...rest } = props;

  return (
    <input
      onChange={(e) => handleInput(e)}
      className={styles.input}
      placeholder={placeholder}
      id={id}
      {...rest}
    />
  );
};

export default Input;
