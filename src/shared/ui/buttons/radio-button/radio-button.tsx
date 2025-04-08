import React from "react";
import radioStyles from "./radio-button.module.css";
import libStyles from "../../lib/button.module.css";

import clsx from "clsx";

interface iButton extends React.InputHTMLAttributes<HTMLInputElement> {
  text: string;
  name: string;
  value: string;
  id: string;
}

export const RadioButton = (props: iButton) => {
  const { text, value, ...rest } = props;

  return (
    <div className={radioStyles.buttonRadio}>
      <input {...rest} type={"radio"} value={value} hidden id={rest.id} />
      <label
        className={clsx(libStyles.button, radioStyles.radio)}
        htmlFor={rest.id}
      >
        {text}
      </label>
    </div>
  );
};
