import React from "react";
import "./css/LeftPanel.css"

function LeftPanel() {
  return (
    <div className="LeftPanel">
      <div className="LPtitle">
        <span className="LPicon">icon</span>
        <span>디바이스 운용 현황 (TODAY)</span>
      </div>

      <div className="LPcharts">
        <div className="chartTitle">
          <span>🌞</span>
          <span> 비상벨 운영 현황</span>
        </div>

      </div>
    </div>
  );
}

export default LeftPanel;