import { useEffect, useState } from "react";
import Button from "./components/Button";
import Counter from "./components/counter";
import TextField from "./components/TextField";
import MapExample from "./components/MapExample";

function App() {

  const [test, setTest] = useState(undefined)

  // const [timer, setTimer] = useState(1)

  // useEffect(() => {

  //   setTimeout(() => {
  //     if(timer > 0)
  //       setTimer(timer - 1)
  //   }, 1000)

  // }, [timer])


  // const fx = async () => {
  //   const datos = fetch('http://algo.com/api')
  //     .then(resp => resp.json())
  //     .then(data => console.log(data)
  //     .catch(() => {
  //       console.log("paso cuando ocurre un error inesperado");
        
  //     })
  //   )
  // }

  // useEffect(() => {
  //   fx()
  // }, [])
  

  return (
    <div className="App">
      <Button text="Botón de prueba" onClick={() => setTest(Math.random())} />
      <TextField />

      {/* { timer && <Counter test={test} /> } */}
      <Counter test={test} /> 

      <h1>{test}</h1>

      <MapExample />
    </div>
  );
}

export default App;

