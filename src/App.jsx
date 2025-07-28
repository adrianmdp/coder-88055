import Button from "./components/Button";
import Counter from "./components/counter";
import TextField from "./components/TextField";

function App() {
  return (
    <div className="App">
      <Button text="Botón de pruena" onClick={() => alert("funciona")} />
      <TextField />
      <Counter />
    </div>
  );
}

export default App;
