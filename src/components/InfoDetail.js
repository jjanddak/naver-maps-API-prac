import React from "react";
import "./css/InfoDetail.css";

function InfoDetail ({infoDetailToggle}) {
  return (
    <div className="infoDetail">
      <div className="detailTitle">
        <span>가산동</span><span className="detailClosebtn" onClick={infoDetailToggle}>ㅡ</span>
      </div>

      <div className="detailBox">

        <div className="detailUpperbox">
          <div className="detailTotalQ">
            총 운영개소 <span className="detailQuantity">316</span><span className="detailUnit">개소</span>
          </div>
          <div className="detailInnerbox topradius">
            <div className="detailThTitle topradius">CCTV <span className="detailQuantity green">236</span><span className="detailUnit">개</span></div>
            <div className="detailThDetail">
              <div>범죄예방 <span className="detailInnerQuantity green">236</span><span className="detailUnit">개</span></div>
              <div className="detailDivider"></div>
              <div>교통단속 <span className="detailInnerQuantity green">88</span><span className="detailUnit">개</span></div>
              <div className="detailDivider"></div>
              <div>타법령근거 <span className="detailInnerQuantity green">12</span><span className="detailUnit">개</span></div>
            </div>
          </div>
          <div className="detailInnerbox">
            <div className="detailThTitle">비상벨 <span className="detailQuantity orange">80</span><span className="detailUnit">개</span></div>
            <div className="detailThDetail">
              <div>정상작동 <span className="detailInnerQuantity orange">70</span><span className="detailUnit">개</span></div>
              <div className="detailDivider"></div>
              <div>장애 <span className="detailInnerQuantity orange">7</span><span className="detailUnit">개</span></div>
              <div className="detailDivider"></div>
              <div>단순등록 <span className="detailInnerQuantity orange">3</span><span className="detailUnit">개</span></div>
            </div>
          </div>
          <div className="detailInnerbox bottomradius">
            <div className="detailThTitle">IoT센서 <span className="detailQuantity purple">12</span><span className="detailUnit">개</span></div>
            <div className="detailThDetail bottomradius">
              <div>공공WiFi <span className="detailInnerQuantity purple">6</span><span className="detailUnit">개</span></div>
              <div className="detailDivider"></div>
              <div>복합IoT 센서 관리번호 <span className="detailInnerQuantity purple">3</span><span className="detailUnit">개</span></div>
              <div className="detailDivider"></div>
              <div>스마트 IoT보행로 설치 <span className="detailInnerQuantity purple">2</span><span className="detailUnit">개</span></div>
            </div>
          </div>
        </div>

        <div className="detailUpperbox">
          <div className="detailInnerbox topradius">
            <div className="detailThTitle topradius">선별관제 이벤트 <span className="detailQuantity green">53</span><span className="detailUnit">개</span></div>
            <div className="detailThDetail">
              <div>쓰러짐 <span className="detailInnerQuantity green">6</span><span className="detailUnit">개</span></div>
              <div className="detailDivider"></div>
              <div>군집 <span className="detailInnerQuantity green">26</span><span className="detailUnit">개</span></div>
              <div className="detailDivider"></div>
              <div>배회 <span className="detailInnerQuantity green">2</span><span className="detailUnit">개</span></div>
            </div>
          </div>
          <div className="detailInnerbox">
            <div className="detailThTitle">비상벨 이벤트 <span className="detailQuantity orange">34</span><span className="detailUnit">개</span></div>
            <div className="detailThDetail">
              <div>장애 <span className="detailInnerQuantity orange">6</span><span className="detailUnit">개</span></div>
              <div className="detailDivider"></div>
              <div>통화 <span className="detailInnerQuantity orange">26</span><span className="detailUnit">개</span></div>
              <div className="detailDivider"></div>
              <div>방송 <span className="detailInnerQuantity orange">2</span><span className="detailUnit">개</span></div>
            </div>
          </div>
          <div className="detailInnerbox bottomradius">
            <div className="detailThTitle">관제업무 처리 이벤트 <span className="detailQuantity blue">0</span><span className="detailUnit">개</span></div>
            <div className="detailThDetail bottomradius">
              <div>경범죄 <span className="detailInnerQuantity blue">0</span><span className="detailUnit">개</span></div>
              <div className="detailDivider"></div>
              <div>재난/화재대응 <span className="detailInnerQuantity blue">0</span><span className="detailUnit">개</span></div>
              <div className="detailDivider"></div>
              <div>교통사고등 안전대응 <span className="detailInnerQuantity blue">0</span><span className="detailUnit">개</span></div>
            </div>
          </div>
        </div>

      </div>





    </div>
  )
}

export default InfoDetail;