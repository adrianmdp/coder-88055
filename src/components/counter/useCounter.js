import { useState } from "react";

const useCounter = (initValue) => {
  const [value, setValue] = useState(initValue);

  const add = () => {
    setValue(value + 1);
  };

  const subtract = () => {
    setValue(value - 1);
  };

  return { value, add, subtract };
};

export default useCounter;
