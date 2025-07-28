import Button from "./components/Button";
import TextField from "./components/TextField";

function App() {
  return (
    <div className="App">
      <Button text="Botón de pruena" onClick={() => alert("funciona")} />
      <TextField />
    </div>
  );
}

export default App;
