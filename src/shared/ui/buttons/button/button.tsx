import React from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "error" ;
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

export const Button = ({
                         variant = "primary",
                         size = "md",
                         children,

                         ...props
                       }: ButtonProps) => {
  const baseStyles = "bg-main-dark rounded font-medium transition-colors focus:outline-none";

  const variantStyles = {
    primary: "text-white hover:bg-primaryHover active:bg-blue-700",
    secondary: "bg-secondary text-gray-900 dark:text-white hover:bg-secondaryHover active:bg-gray-400 dark:active:bg-gray-500 border border-gray-300 dark:border-gray-600",
    error: "bg-error text-white hover:bg-errorHover active:bg-red-700",

  };

  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg w-4/5",
  };

  return (
      <button
          className={clsx(
              baseStyles,
              variantStyles[variant],
              sizeStyles[size],

          )}
          {...props}
      >
        {children}
      </button>
  );
};