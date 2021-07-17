import Data from "./components/Data";
import Input from "./components/Input";
import Map from "./components/Map";

function App() {
  return (
    <div className="app">
      <div className="content">
        <h2>IP Adress Tracker</h2>
        <Input />
        <Data />
      </div>
      <Map />
    </div>
  );
}

export default App;
