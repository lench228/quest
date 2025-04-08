import styles from "./input-label.module.css";
import React from "react";

interface iInputLabel {
  error: string;
  label: string;
}

const InputLabel = (props: iInputLabel) => {
  const { error, label } = props;

  return <label className={styles.label}>{error ? error : label}</label>;
};

export default InputLabel;
