import './App.css';
import Head from "./components/Head";
import dotenv from "dotenv";
import LeftPanel from './components/LeftPanel';
import Map from './components/Map';
import Tempbar from './components/Tempbar';
import Infobox from './components/Infobox';
dotenv.config();

function App() {
  return (
    <div className="App">
      <Head />
      <LeftPanel />
      <Map />
      <Tempbar />
      <Infobox />
    </div>
  );
}

export default App;
