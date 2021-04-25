import "./css/RPclose.css";

function RPclose ({RPmodalToggle}) {
  return (
    <div className="RPclose">
      <div className="RPcloseTitle">
        <span className="">icon2</span>
      </div>
      <div className="LPcharts">
        <div className="RPcloseContent">비상벨 이벤트 현황</div>
        <div className="RPcloseContent">선별관제 이벤트 현황</div>
        <div className="RPcloseContent">이벤트 목록</div>
        <div className="RPopenbtn" onClick={RPmodalToggle}>
          ◀
        </div>
      </div>
    </div>
  )
}

export default RPclose;