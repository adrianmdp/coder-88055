import Button from "../Button";
import TextField from "../TextField";
import useCounter from "./useCounter";

const Counter = () => {
  const { value, add, subtract } = useCounter(0);

  return (
    <>
      <Button onClick={subtract} text="-" />
      <TextField value={value} name="counter" id="counter-input" />
      <Button onClick={add} text="+" />
    </>
  );
};

export default Counter;
