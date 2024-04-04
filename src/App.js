import "./App.css";
import "./App25.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfiloPage from "./components/ProfiloPage";
import Homepage from "./components/HomePage";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#F4F2EE" }}>
      {/* <ProfiloPage /> */}
      <Homepage />
    </div>
  );
}

export default App;
