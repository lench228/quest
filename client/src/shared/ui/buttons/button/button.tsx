import React, { ReactNode } from "react";
import buttonStyles from "./button.module.css";
import libStyles from "../../lib/button.module.css";

import clsx from "clsx";

type TVariant = "primary" | "secondary" | "cancel";

interface iButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: TVariant;
}

export const Button = ({
  children,
  variant = "primary",
  ...props
}: iButton) => {
  return (
    <button
      {...props}
      className={clsx(libStyles.button, buttonStyles[variant])}
    >
      {children}
    </button>
  );
};
