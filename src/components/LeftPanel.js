import * as echarts from 'echarts';
import React from "react";
import "./css/LeftPanel.css"

class LeftPanel extends React.Component {
  constructor(props){
    super(props);
    this.LPmodalTogglefnc = this.LPmodalTogglefnc.bind(this);
  }

  setBellChart() {
    // initialize the echarts instance
    let bellchart = echarts.init(document.getElementById('bellchart'));
    // Draw the chart
    bellchart.setOption({
      tooltip: {
        trigger: 'item'
      },
      animation: false,
      legend: {
          top: '90%',
          left: 'center',
          icon: 'rect',
          textStyle: {
            fontSize: "14",
            color: "rgba(255, 255, 255, 1)",
            lineHeight: '20'
          }
      },
      title: {
        text: "86.16%",
        left: "160",
        top:"135",
        color: "#fff",
        textStyle: {
          color: "#7BB600",
          fontSize:"35"
        },
        subtext: "(542/629대)",
        subtextStyle:{
          color:"#ccc",
          fontWeight: "bold",
          fontSize: "14",
          lineHeight: "50"
        },
        textAlign: "center"
      },
      series: [
          {
            type: 'pie',
            top: "0%",
            radius: ['48%', '70%'],
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
            color: ["#7BB600","#EE6300","#8D8D8D"],
            labelLine: {
                show: false
            },
            data: [
                {value: 542, name: '정상작동'},
                {value: 66, name: '장애'},
                {value: 21, name: '오프라인'}
            ]
        }
    ]
    });
  }

  setCCTVChart() {
    let cctvchart = echarts.init(document.getElementById('cctvchart'));
    // Draw the chart
    cctvchart.setOption({
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // Use axis to trigger tooltip
            type: 'shadow'        // 'shadow' as default; can also be 'line' or 'shadow'
        }
    },
    barWidth:"100%",
    title: {
      text: "총 카메라 합계                          개",
      left: "160",
      top:"20",
      color: "#fff",
      textStyle: {
        color: "#aaa",
        fontSize:"14",
        fontWeight:"normal"
      },
      subtext: "            1984",
      subtextStyle:{
        color:"#fff",
        fontWeight: "normal",
        fontSize: "25",
        lineHeight: "-35",
      },
      textAlign: "center"
    },
    animation: false,
    legend: {
      top: '80%',
      left: 'center',
      icon: 'rect',
      textStyle: {
        fontSize: "14",
        color: "rgba(255, 255, 255, 1)",
        lineHeight: '20'
      }
  },
    xAxis: {
        type: 'value',
        show:false
    },
    yAxis: {
        type: 'category',
        show:false
    },
    series: [
        {
            name: '범죄예방',
            type: 'bar',
            stack: 'total',
            label: {
                show: false
            },
            color:"#1192E8",
            emphasis: {
                // focus: 'series'
            },
            data: [1858],
            barWidth:"30"
        },
        {
            name: '교통단속',
            type: 'bar',
            stack: 'total',
            label: {
                show: false
            },
            color:"#FFA012",
            emphasis: {
                focus: 'series'
            },
            data: [85]
        },
        {
            name: '타법령근거',
            type: 'bar',
            stack: 'total',
            label: {
                show: false
            },
            color:"#8A3FFC",
            emphasis: {
                focus: 'series'
            },
            data: [41]
        },
      ]
    });
  }

  setSystemChart() {
    let systemchart = echarts.init(document.getElementById('systemchart'));
    // Draw the chart
    systemchart.setOption({
      tooltip: {
        trigger: 'item'
      },
      animation: false,
      title: {
        text: "CPU",
        left: "77",
        top:"70",
        color: "#fff",
        textStyle: {
          color: "#fff",
          fontSize:"20"
        },
        subtext: "72%",
        subtextStyle:{
          color:"#fff",
          fontWeight: "bold",
          fontSize: "25",
          lineHeight: "5"
        },
        textAlign: "center"
      },
      series: [
          {
            type: 'pie',
            top: "0",
            radius: ['70%', '90%'],
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
            color: ["#08BDBA","#000"],
            labelLine: {
                show: false
            },
            data: [
                {value: 72, name: 'CPU사용'},
                {value: 28, name: 'idle'},
            ]
        }
      ]
    });
    let systemchart2 = echarts.init(document.getElementById('systemchart2'));
    // Draw the chart
    systemchart2.setOption({
      tooltip: {
        trigger: 'item'
      },
      animation: false,
      title: {
        text: "MEMORY",
        left: "77",
        top:"70",
        color: "#fff",
        textStyle: {
          color: "#fff",
          fontSize:"20"
        },
        subtext: "72%",
        subtextStyle:{
          color:"#fff",
          fontWeight: "bold",
          fontSize: "25",
          lineHeight: "5"
        },
        textAlign: "center"
      },
      series: [
          {
            type: 'pie',
            top: "0",
            radius: ['70%', '90%'],
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
            color: ["#7BB600","#000"],
            labelLine: {
                show: false
            },
            data: [
                {value: 72, name: '메모리사용'},
                {value: 28, name: 'idle'},
            ]
        }
      ]
    });
    let diskchart = echarts.init(document.getElementById('diskchart'));
    // Draw the chart
    diskchart.setOption({
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // Use axis to trigger tooltip
            type: 'shadow'        // 'shadow' as default; can also be 'line' or 'shadow'
        },
    },
    barWidth:"100%",
    title: {
      text: "DISK",
      left: "40",
      top:"5",
      color: "#fff",
      textStyle: {
        color: "#fff",
        fontSize:"10",
        fontWeight:"bold"
      },
      subtext: "                                                                                                                                                                               67%",
      subtextStyle:{
        width:"100",
        textAlign: "right",
        color:"#fff",
        fontWeight: "bold",
        fontSize: "12",
        lineHeight: "-32",
      },
      textAlign: "center"
    },
    animation: false,
    xAxis: {
        type: 'value',
        show:false
    },
    yAxis: {
        type: 'category',
        show:false
    },
    series: [
      {
        name: 'DISK사용',
        type: 'bar',
        stack: 'total',
        label: {
            show: false
        },
        color:"#42BE65",
        emphasis: {
            // focus: 'series'
        },
        data: [67],
        barWidth:"15"
      },
      {
        name: 'idle',
        type: 'bar',
        stack: 'total',
        label: {
            show: false
        },
        color:"#000",
        emphasis: {
            focus: 'series'
        },
        data: [90]
      },
      ]
    });
  }

  LPmodalTogglefnc () {
    this.props.LPmodalToggle();
  }

  componentDidMount() {
    this.setBellChart();
    this.setCCTVChart();
    this.setSystemChart();
  }

  render () {
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
  
          <div id="bellchart">
            {/* 비상벨차트 */}
          </div>
          <div className="chartTitle">
            <span>🌞</span>
            <span> CCTV 설치현황</span>
          </div>
          <div id="cctvchart">
            {/* CCTV 차트 */}
          </div>

          <div className="LPclosebtn" onClick={this.LPmodalTogglefnc}>
            ◀  
          </div>

          <div className="chartTitle systemCTitle">
            <span>🌞 시스템 현황</span>

            <span className="chartDate">2021.04.20 15:20:26</span>
          </div>

          <div className="servercombobox">
            <select>
              <option defaultValue value="system">전체 서버</option>
            </select>
          </div>
          <div className="systemchartbox">
            <div className="systemchartinnerbox">
              <div id="systemchart">
                {/* 시스템 현황차트 */}
              </div>
              <div id="systemchart2">
                {/* 시스템 현황차트 */}
              </div>
            </div>
            <div id="diskchart">
              {/* 시스템 현황차트 */}
            </div>
          </div>
        </div>
      </div>
    );
  } 
}

export default LeftPanel;