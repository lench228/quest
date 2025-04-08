import React, { ChangeEvent } from "react";

interface iInput extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  handleInput(e: ChangeEvent<HTMLInputElement>): void;
}

const Input = (props: iInput) => {
  const { placeholder, id, handleInput, ...rest } = props;

  return (
    <input
      onChange={(e) => handleInput(e)}
      className={`
      text-background dark:text-additional 
      font-medium text-lg 
      border-2 border-dim dark:border-dim 
      bg-transparent dark:bg-background
      p-1 rounded
      transition-colors duration-300 ease-in-out
      focus:border-background dark:focus:border-white focus:outline-none
      data-[error=true]:border-error
    `}

      placeholder={placeholder}
      id={id}
      {...rest}
    />
  );
};

export default Input;
