import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PannelloProfilo from "./components/PannelloProfilo";
import AnalisiProfilo from "./components/AnalisiProfilo";
import RisorseProfilo from "./components/RisorseProfilo";
import AttivitaProfilo from "./components/AttivitaProfilo";
import EsperienzaProfilo from "./components/EsperienzaProfilo";
function App() {
  return (
    <div className="App">
      <EsperienzaProfilo />
    </div>
  );
}

export default App;
