import './App.css';
import Head from "./components/Head";
import dotenv from "dotenv";
import LeftPanel from './components/LeftPanel';
import Map from './components/Map';
dotenv.config();

function App() {
  return (
    <div className="App">
      <Head />
      <LeftPanel />
      <Map />
    </div>
  );
}

export default App;
