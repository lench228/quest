import React, { ChangeEvent } from "react";
import { UseLocalStorage } from "../../hooks/useLocalStorage";

import Input from "./input";
import { TInputVariant } from "shared/types";
import InputLabel from "../input-label/ui/input-label";

interface iInputWrapper extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  validate?: (value: string) => string;
  id: string;
  variant: TInputVariant;
}

const InputWrapper = (props: iInputWrapper) => {
  const { label, validate, id, variant, ...rest } = props;

  const [value, setValue] = UseLocalStorage<string>(id, "");
  const [error, setError] = UseLocalStorage<string>("ERROR_" + id, "");

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const eventValue = e.target.value;
    setValue(eventValue);

    if (validate) {
      const error = validate(eventValue);

      if (error) {
        setError(error);
      } else setError("");
    }
  };

  return (
    <fieldset
      className={"flex flex-col mb-[10px] relative mx-auto "}
      data-error={error ? "true" : "false"}
    >
      <InputLabel label={label} error={error} />
      <div className={"flex items-center"}>
        {variant === "color" && (
          <input
            style={{
              border: "none",
              width: "40px",
              height: "40px",
              padding: 0,
              margin: 0,
              outline: "none",
            }}
            className={""}
            value={value}
            onChange={handleInput}
            type={"color"}
          />
        )}
        <Input id={id} handleInput={handleInput} value={value} {...rest} />
      </div>
    </fieldset>
  );
};

export default InputWrapper;
