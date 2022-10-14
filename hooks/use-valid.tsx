import { useState } from "react";
import type { SetStateAction } from "react";

const useValidInput = (validator: (value: string) => boolean) => {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);

  const isValid: boolean = validator(value);
  const isNotValid: boolean = !isValid && touched;

  const changeValueHandler = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setValue(e.target.value);
  };

  const blurHandler = () => {
    setTouched(true);
  };

  const reset = () => {
    setValue("");
    setTouched(false);
  };

  return { value, changeValueHandler, blurHandler, isValid, isNotValid, reset };
};

export default useValidInput;
