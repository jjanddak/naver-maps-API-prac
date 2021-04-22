import "./css/Infobox.css";

function Infobox () {
  return(
    <div className="infobox" id="info1">
      <div className="infoTitleContainer">
        <span className="infoTitle">가산동</span>
        <span className="infoDetailbtn">+</span>
      </div>

      <div className="infoUpperbox">
        <div>
          <span>총 운영개소 </span>
          <span>316</span>
          <span>개소</span>
        </div>

        <div>
          <div>CCTV</div>
          <span>236</span>
          <span>개</span>
        </div>
        <div>
          <div>비상벨</div>
          <span>80</span>
          <span>개</span>
        </div>
        <div>
          <div>IoT센서</div>
          <span>8</span>
          <span>개</span>
        </div>
      </div>
      
      <div className="infoLowerbox">
        <div>
          <span>선별관제 이벤트</span>
          <span>168건</span>
        </div>
        <div>
          <span>비상벨 이벤트</span>
          <span>36건</span>
        </div>
        <div>
          <span>관제업무 처리 이벤트</span>
          <span>4건</span>
        </div>
      </div>
    </div>
  )
}

export default Infobox;