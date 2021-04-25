import React, { useState } from "react"
import './App.css';
import Head from "./components/Head";
import dotenv from "dotenv";
import LeftPanel from './components/LeftPanel';
import Map from './components/Map';
import Tempbar from './components/Tempbar';
import Infobox from './components/Infobox';
import InfoDetail from "./components/InfoDetail";
import RightPanel from "./components/RightPanel";
import RPclose from "./components/RPclose";
import LPclose from "./components/LPclose";
dotenv.config();

function App() {
  const [state, setState] = useState({ 
    infoDetail: false,
    RPmodal: true,
    LPmodal: true,
  })

  const { infoDetail, RPmodal, LPmodal } = state;

  const infoDetailToggle = () => {
    setState({...state, infoDetail: !infoDetail});
  }
  const RPmodalToggle = () => {
    setState({...state, RPmodal: !RPmodal});
  }
  const LPmodalToggle = () => {
    setState({...state, LPmodal: !LPmodal});
  }

  return (
    <div className="App">
      <Head />
      {LPmodal ? <LeftPanel LPmodalToggle={LPmodalToggle}/> : <LPclose LPmodalToggle={LPmodalToggle}/>}
      <Map />
      <Tempbar />
      <Infobox infoDetailToggle={infoDetailToggle}/>
      {infoDetail && <InfoDetail infoDetailToggle={infoDetailToggle}/>}
      {RPmodal ? <RightPanel RPmodalToggle={RPmodalToggle}/> : <RPclose RPmodalToggle={RPmodalToggle}/>}
      
    </div>
  );
}

export default App;
