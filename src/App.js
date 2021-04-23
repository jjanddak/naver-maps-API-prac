import React, { useState } from "react"
import './App.css';
import Head from "./components/Head";
import dotenv from "dotenv";
import LeftPanel from './components/LeftPanel';
import Map from './components/Map';
import Tempbar from './components/Tempbar';
import Infobox from './components/Infobox';
import InfoDetail from "./components/InfoDetail";
dotenv.config();

function App() {
  const [state, setState] = useState({ 
    infoDetail: false
  })

  const { infoDetail } = state;

  const infoDetailToggle = () => {
    setState({...state, infoDetail: !infoDetail});
  }

  return (
    <div className="App">
      <Head />
      <LeftPanel />
      <Map />
      <Tempbar />
      <Infobox infoDetailToggle={infoDetailToggle}/>
      {infoDetail && <InfoDetail  infoDetailToggle={infoDetailToggle}/>}
    </div>
  );
}

export default App;
