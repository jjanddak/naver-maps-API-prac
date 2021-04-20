import './App.css';
import Head from "./components/Head";
import dotenv from "dotenv";
import LeftPanel from './components/LeftPanel';
dotenv.config();

function App() {
  return (
    <div className="App">
      <Head />
      <LeftPanel />
    </div>
  );
}

export default App;
