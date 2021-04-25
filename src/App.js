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
    if(RPmodal){
      const arr=[];
      arr.push(document.getElementById("info7"));
      arr.push(document.getElementById("info8"));
      arr.push(document.getElementById("info9"));
      arr.push(document.getElementById("info10"));
      document.getElementById("info6").style.left="1351px";
      for(let ele of arr){
        ele.style.left="1602px";
      }   
    }else{
      const arr=[];
      arr.push(document.getElementById("info7"));
      arr.push(document.getElementById("info8"));
      arr.push(document.getElementById("info9"));
      arr.push(document.getElementById("info10"));
      document.getElementById("info6").style.left="1051px";
      for(let ele of arr){
        ele.style.left="1302px";
      }      
    }
  }
  const LPmodalToggle = () => {
    setState({...state, LPmodal: !LPmodal});
    if(LPmodal){
      const arr=[];
      arr.push(document.getElementById("info1"));
      arr.push(document.getElementById("info2"));
      arr.push(document.getElementById("info3"));
      arr.push(document.getElementById("info4"));
      document.getElementById("info5").style.left="357px";
      for(let ele of arr){
        ele.style.left="100px";
      }
    }else{
      const arr=[];
      arr.push(document.getElementById("info1"));
      arr.push(document.getElementById("info2"));
      arr.push(document.getElementById("info3"));
      arr.push(document.getElementById("info4"));
      document.getElementById("info5").style.left="657px";
      for(let ele of arr){
        ele.style.left="400px";
      }
    }
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
