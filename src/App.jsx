import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <Button text="Botón de pruena" onClick={() => alert("funciona")} />
    </div>
  );
}

export default App;
