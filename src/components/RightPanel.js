import * as echarts from 'echarts';
import react, { useEffect } from "react";
import "./css/RightPanel.css";

function RightPanel ({RPmodalToggle}) {
  
  function setBellChart() {
    // initialize the echarts instance
    let controlchart = echarts.init(document.getElementById('controlchart'));
    // Draw the chart
    controlchart.setOption({
      tooltip: {
        trigger: 'item'
      },
      title: {
        text: "총건수",
        left: "100",
        top:"100",
        color: "#fff",
        textStyle: {
          color: "#FFFFFF"
        },
        subtext: "315",
        subtextStyle:{
          color:"#fff",
          fontWeight: "bold",
          fontSize: "20",
          lineHeight: "5"
        },
        textAlign: "center"
      },
      animation: true,
      legend: {
          orient: 'vertical',
          top: '20',
          right: 'right',
          icon: 'roundRect',
          textStyle: {
            fontSize: "12",
            color: "rgba(255, 255, 255, 1)",
            lineHeight: '5'
          }
      },
      series: [
          {
            type: 'pie',
            top: "0%",
            left: "-35%",
            radius: ['50%', '80%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            itemStyle: {
              borderRadius: 1,
              borderColor: '#21272A',
              borderWidth: 2
            },
            color: ["#00C0C7","#5144D3","#E8871A","#C93514","#9089FA","#47E26F","#2780EB","#DFBF03"],
            labelLine: {
                show: false
            },
            data: [
                {value: 80, name: '쓰러짐'},
                {value: 66, name: '군집'},
                {value: 45, name: '배회'},
                {value: 40, name: '폭력'},
                {value: 33, name: '버려짐'},
                {value: 16, name: '연기'},
                {value: 5, name: '불꽃'},
                {value: 3, name: '경계선 통과'},
            ]
        }
    ]
    });
  }

  useEffect(()=>{
    setBellChart();
  }, []);

  return (
    <div className="RightPanel">
      <div className="LPtitle">
        <span className="LPicon">icon2</span>
        <span>이벤트 현황 (TODAY)</span>
      </div>

      <div className="LPcharts">
        <div className="chartTitle">
          <span>🌞</span>
          <span> 비상벨 운영 현황</span>
        </div>
        <div className="eventbox">
          <div className="eventinnerbox">
            <div className="eventcontent">
              <div>장애</div>
              <span className="eventQuantity orange">63</span>
              <span className="eventUnit">건</span>
            </div>
            <div className="RPdivider"></div>
         
            <div className="eventcontent">
              <div>통화중</div>
              <span className="eventQuantity orange">3</span>
              <span className="eventUnit">건</span>
            </div>
            <div className="RPdivider"></div>
          
            <div className="eventcontent">
              <div>방송중</div>
              <span className="eventQuantity orange">0</span>
              <span className="eventUnit">건</span>
            </div>
          </div>
        </div>

        <div className="chartTitle">
          <span>🌞</span>
          <span> 선별관제 이벤트 현황</span>
        </div>
        <div className="eventbox">
          <div id="controlchart">
            {/* 선별관제 차트 */}
          </div>
        </div>

        <div className="RPclosebtn" onClick={RPmodalToggle}>
          ▶
        </div>

        <div className="chartTitle">
          <span>🌞</span>
          <span> 이벤트 목록</span>
        </div>
        <div className="eventbox">
          <div className="eventList">

            <div className="eventListbox">
              <div className="elistTitlebox">
                <div className="eventTag"  id="violence">폭력</div>
                <div className="eventboxContent">[P119] 동도수퍼 앞</div>
              </div>
              <div className="elistContentbox">
                <div className="eventboxContent">독산4동 독산로32 나길 36</div>
                <div className="elistTimebox">
                  <div>
                    <span className="eventboxContent">발생시각 <span className="eventTimestamp">08:21:43</span></span>
                  </div>
                  <div>
                    <span className="eventboxContent">종료시각 <span className="eventTimestamp">08:34:16</span></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="eventListbox">
              <div className="elistTitlebox">
                <div className="eventTag" id="prowl">배회</div>
                <div className="eventboxContent">[P119] 동도수퍼 앞</div>
              </div>
              <div className="elistContentbox">
                <div className="eventboxContent">독산4동 독산로32 나길 36</div>
                <div className="elistTimebox">
                  <div>
                    <span className="eventboxContent">발생시각 <span className="eventTimestamp">08:21:43</span></span>
                  </div>
                  <div>
                    <span className="eventboxContent">종료시각 <span className="eventTimestamp">08:34:16</span></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="eventListbox">
              <div className="elistTitlebox">
                <div className="eventTag" id="boundary">경계선</div>
                <div className="eventboxContent">[P119] 동도수퍼 앞</div>
              </div>
              <div className="elistContentbox">
                <div className="eventboxContent">독산4동 독산로32 나길 36</div>
                <div className="elistTimebox">
                  <div>
                    <span className="eventboxContent">발생시각 <span className="eventTimestamp">08:21:43</span></span>
                  </div>
                  <div>
                    <span className="eventboxContent">종료시각 <span className="eventTimestamp">08:34:16</span></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="eventListbox">
              <div className="elistTitlebox">
                <div className="eventTag" id="calling">통화중</div>
                <div className="eventboxContent">[P119] 동도수퍼 앞</div>
              </div>
              <div className="elistContentbox">
                <div className="eventboxContent">독산4동 독산로32 나길 36</div>
                <div className="elistTimebox">
                  <div>
                    <span className="eventboxContent">발생시각 <span className="eventTimestamp">08:21:43</span></span>
                  </div>
                  <div>
                    <span className="eventboxContent">종료시각 <span className="eventTimestamp">08:34:16</span></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="eventListbox">
              <div className="elistTitlebox">
                <div className="eventTag" id="obstacle">장애</div>
                <div className="eventboxContent">[P119] 동도수퍼 앞</div>
              </div>
              <div className="elistContentbox">
                <div className="eventboxContent">독산4동 독산로32 나길 36</div>
                <div className="elistTimebox">
                  <div>
                    <span className="eventboxContent">발생시각 <span className="eventTimestamp">08:21:43</span></span>
                  </div>
                  <div>
                    <span className="eventboxContent">종료시각 <span className="eventTimestamp">08:34:16</span></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="eventListbox">
              <div className="elistTitlebox">
                <div className="eventTag" id="smoke">연기</div>
                <div className="eventboxContent">[P119] 동도수퍼 앞</div>
              </div>
              <div className="elistContentbox">
                <div className="eventboxContent">독산4동 독산로32 나길 36</div>
                <div className="elistTimebox">
                  <div>
                    <span className="eventboxContent">발생시각 <span className="eventTimestamp">08:21:43</span></span>
                  </div>
                  <div>
                    <span className="eventboxContent">종료시각 <span className="eventTimestamp">08:34:16</span></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="eventListbox">
              <div className="elistTitlebox">
                <div className="eventTag" id="group">군집</div>
                <div className="eventboxContent">[P119] 동도수퍼 앞</div>
              </div>
              <div className="elistContentbox">
                <div className="eventboxContent">독산4동 독산로32 나길 36</div>
                <div className="elistTimebox">
                  <div>
                    <span className="eventboxContent">발생시각 <span className="eventTimestamp">08:21:43</span></span>
                  </div>
                  <div>
                    <span className="eventboxContent">종료시각 <span className="eventTimestamp">08:34:16</span></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="eventListbox">
              <div className="elistTitlebox">
                <div className="eventTag" id="left">버려짐</div>
                <div className="eventboxContent">[P119] 동도수퍼 앞</div>
              </div>
              <div className="elistContentbox">
                <div className="eventboxContent">독산4동 독산로32 나길 36</div>
                <div className="elistTimebox">
                  <div>
                    <span className="eventboxContent">발생시각 <span className="eventTimestamp">08:21:43</span></span>
                  </div>
                  <div>
                    <span className="eventboxContent">종료시각 <span className="eventTimestamp">08:34:16</span></span>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
        
      </div>

    </div>
  )
}

export default RightPanel;