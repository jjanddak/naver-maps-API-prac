import './App.css';
import { RenderAfterNavermapsLoaded, NaverMap } from 'react-naver-maps'; // 패키지 불러오기
require("dotenv").config();
// import dotenv from "dotenv";
// dotenv.config();

function NaverMapAPI() {
  return (
    <NaverMap
      mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
      style={{
        width: '50%', // 네이버지도 가로 길이
        height: '50vh' // 네이버지도 세로 길이
      }}
      defaultCenter={{ lat: 37.554722, lng: 126.970833 }} // 지도 초기 위치
      defaultZoom={13} // 지도 초기 확대 배율
    />
  );
}

function App() {
  const ClientId=process.env.REACT_APP_MAPS_CLIENT;
  return (
    <div className="App">
      <RenderAfterNavermapsLoaded
        ncpClientId={ClientId} // 자신의 네이버 계정에서 발급받은 Client ID
        error={<p>Maps Load Error</p>}
        loading={<p>Maps Loading...</p>}
      >
        <NaverMapAPI />
      </RenderAfterNavermapsLoaded>
    </div>
  );
}

export default App;
