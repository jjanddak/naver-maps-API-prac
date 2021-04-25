import "./css/LPclose.css";

function LPclose ({LPmodalToggle}) {
  return (
    <div className="LPclose">
      <div className="RPcloseTitle">
        <span className="">icon</span>
      </div>
      <div className="LPcharts">
        <div className="RPcloseContent">비상벨 운영 현황</div>
        <div className="RPcloseContent">CCTV 설치현황</div>
        <div className="RPcloseContent">시스템 현황</div>
        <div className="LPopenbtn" onClick={LPmodalToggle}>
          ▶
        </div>
      </div>
    </div>
  )
}

export default LPclose;