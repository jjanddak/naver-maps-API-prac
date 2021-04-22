import "./css/Head.css";
import React, { useState, useEffect } from "react";

function Head() {
  const [date, setDate] = useState(new Date());

  useEffect(()=>{
    //This will update timer every second
    const interval = setInterval(()=>{
      setDate(new Date())
    },1000); 
    //This is important to clear interval
    return () => clearInterval(interval)
  },[date])

  return (
    <div className="head">
      <div className="title">
        종합상황관리 대시보드
      </div>

      <div className="GNB">
        <a className="active" href="/monitoring">통합모니터링</a>
        <div className="dot"></div>
        <a href="/opration">운영현황</a>
        <div className="dot"></div>
        <a href="/event">이벤트</a>
        <div className="dot"></div>
        <a href="/system">시스템 관리</a>
      </div>

      <div className="combobox">
        <select>
          <option defaultValue value="system">업무시스템</option>
          <option value="GIS">GIS</option>
          <option value="taskMgmt">업무관리</option>
          <option value="emergency">비상벨</option>
          <option value="innerControll">내부통제</option>
          <option value="NMS">NMS</option>
          <option value="firewall">방화벽</option>
        </select>
        <div>▼</div>
      </div>

      <div className="timeService">
        <div>
          <div className="TSlabel">현재시각</div>
          <div className="TScontent">
            {date.getHours()>9?date.getHours():"0"+date.getHours()}:{date.getMinutes()>9?date.getMinutes():"0"+date.getMinutes()}:{date.getSeconds()>9?date.getSeconds():"0"+date.getSeconds()}
            <span className="yearDate">
              {date.getFullYear()}.{date.getMonth()+1>9?date.getMonth()+1:"0"+(date.getMonth()+1)}.{date.getDate()>9?date.getDate():"0"+date.getDate()}
            </span>
          </div>
        </div>

        <span className="divider"></span>

        <div className="weather">
            <div className="TSlabel">날씨</div>
            <div className="TScontent">
              21
              <span>
              <span>°C</span>
              <span className="weatherIcon">☁</span>
              {/* <span><img className="weatherIcon" src="https://cdn.icon-icons.com/icons2/38/PNG/512/overcastday_weather_sun_cloudy_4493.png" /></span> */}
              </span>
            </div>
          </div>

        <span className="divider"></span>

        <div className="PM">
          <div className="TSlabel pm">PM2.5</div>
          <div className="TScontent">
            27
            <span className="yearDate">좋음</span>
          </div>
        </div>

      </div>

      <a href="/logout"><img className="logout" src="data:image/png;base64,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" alt="logoutButton" /></a>
      
    </div>
  )
}

export default Head;