import "./App.css";

// importai viršuje
import FuncButton from "./components/FuncButton";
import FuncDiv from "./components/FuncDiv";
import ClassButton from "./components/ClassButton";
import ClassDiv from "./components/ClassDiv";

// apibrėžiam komponento pavadinimą, visada didžioji raidė.
// geroji praktika: Failo pavadinimas toks pat kaip komponento pavadinimas
function App() {
  const name = "Rokas";
  function getName() {
    return "Tadas";
  }
  const getSurname = () => {
    return "Raimis";
  };
  const surname = getSurname();
  return (
    <div>
      <h1>Mamutas</h1>
      <h2>{name}</h2>
      <h2>{getName()}</h2>
      <h2>{getSurname()}</h2>
      <h2>{surname}</h2>
      <FuncButton title="Click me" />
      <FuncButton title="Spausk mane" />
      <FuncButton title="Cia nespausti" />
      <FuncDiv title="Spausk cia" />
      <ClassButton title="Click HERE!" />
      <ClassDiv title="Click HERE!" />
    </div>
  );
}

// exportuojam, kad galėtume importuoti kitame faile
export default App;
