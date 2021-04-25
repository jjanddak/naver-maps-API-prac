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
import Noticeclose from "./components/Noticeclose";
import Notice from "./components/Notice";
dotenv.config();

function App() {
  const [state, setState] = useState({ 
    infoDetail: false,
    RPmodal: true,
    LPmodal: true,
    Noticemodal: false,
  })

  const { infoDetail, RPmodal, LPmodal, Noticemodal } = state;

  const infoDetailToggle = () => {
    setState({...state, infoDetail: !infoDetail});
  }
  const RPmodalToggle = () => {
    setState({...state, RPmodal: !RPmodal});
  }
  const LPmodalToggle = () => {
    setState({...state, LPmodal: !LPmodal});
  }
  const NoticemodalToggle = () => {
    setState({...state, Noticemodal: !Noticemodal});
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
      {Noticemodal ? <Notice NoticemodalToggle={NoticemodalToggle}/> : <Noticeclose NoticemodalToggle={NoticemodalToggle}/>}
    </div>
  );
}

export default App;
