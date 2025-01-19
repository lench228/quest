import React, { ReactNode } from "react";

import libStyles from "../../lib/button.module.css";
import buttonStyles from "./button.module.css";

import clsx from "clsx";

type TVariant = "primary" | "secondary" | "cancel";

interface iButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: TVariant;
}

export const Button = (props: iButton) => {
  const { children, variant = "primary", disabled, ...rest } = props;
  return (
    <button
      {...rest}
      disabled={disabled}
      className={clsx(buttonStyles[variant], libStyles.button)}
    >
      {children}
    </button>
  );
};
