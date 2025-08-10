import { useEffect, useState } from "react";
import Button from "../Button";
import TextField from "../TextField";
import useCounter from "./useCounter";

const Counter = ({ test }) => {
  const { value, add, subtract } = useCounter(0);

  const [datoRandom, setDatoRandom] = useState(0)

  // useEffect(funcion, arrayDeDeps)

  useEffect(() => {

    console.log('dentro del useEffect')

    return () => {
      console.log('esto pasa cuando se desmonta el componente');
    }

  }, [])

  useEffect(() => {

    console.log('dentro del useEffect con value en array de dependencias')

  }, [value])

  useEffect(() => {

    console.log('dentro del useEffect con test en array de dependencias')

  }, [test])

  useEffect(() => {

    console.log('dentro del useEffect con value y test en array de dependencias')

  }, [value, test])

  useEffect(() => {

    setDatoRandom(Math.random())

    console.log(datoRandom);
    
  }, [])

  return (
    <>
      <Button onClick={subtract} text="-" />
      <TextField value={value} name="counter" id="counter-input" />
      <Button onClick={add} text="+" />

      {datoRandom}
    </>
  );
};

export default Counter;
