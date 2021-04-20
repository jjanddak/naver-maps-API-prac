import * as echarts from 'echarts';
import React from "react";
import "./css/LeftPanel.css"

class LeftPanel extends React.Component {

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
      series: [
          {
            type: 'pie',
            top: "0%",
            radius: ['40%', '70%'],
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
    // legend: {
    //     data: ['Direct', 'Mail Ad', 'Affiliate Ad']
    // },
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
        type: 'value'
    },
    yAxis: {
        type: 'category',
        // data: ['Mon']
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
            data: [1858]
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
    let systemChart = echarts.init(document.getElementById('systemchart'));
    // Draw the chart
    systemChart.setOption({
  //     series: [
  //         {
  //             // name: '半径模式',
  //             type: 'pie',
  //             radius: [45, 65],
  //             center: ['25%', '50%'],
  //             roseType: ['area'],
  //             itemStyle: {
  //                 // borderRadius: 5
  //             },
  //             color:["#08BDBA","#000"],
  //             label: {
  //                 show: false
  //             },
  //             emphasis: {
  //                 label: {
  //                     show: false
  //                 }
  //             },
  //             color:["#fff","#000"],
  //             data: [
  //                 {value: 78, name: 'rose 1'},
  //                 {value: 22, name: 'rose 2'},
  //             ]
  //         },
  //         {
  //             // name: '面积模式',
  //             type: 'pie',
  //             radius: [45, 65],
  //             center: ['75%', '50%'],
  //             roseType: ['radius'],
  //             itemStyle: {
  //                 // borderRadius: 5
  //             },
  //             label: {
  //                 show: false
  //             },
  //             data: [
  //                 {value: 52, name: 'rose 1'},
  //                 {value: 48, name: 'rose 2'},
  //             ]
  //         }
  //     ]
  // });
    series: [
        {
            // name: '半径模式',
            type: 'pie',
            radius: [45, 65],
            center: ['25%', '50%'],
            roseType: ['area'],
            itemStyle: {
                // borderRadius: 5
            },
            label: {
                show: false
            },
            emphasis: {
                label: {
                    show: false
                }
            },
            color:["#08BDBA","#000"],
            data: [
                {value: 78, name: 'rose 1'},
                {value: 22, name: 'rose 2'},
            ]
        },
        {
            // name: '面积模式',
            type: 'pie',
            radius: [45, 65],
            center: ['75%', '50%'],
            roseType: 'area',
            itemStyle: {
                // borderRadius: 5
            },
            label: {
                show: false
            },
            color:["#BE95FF","#000"],
            data: [
                {value: 52, name: 'rose 1'},
                {value: 48, name: 'rose 2'},
            ]
        }
    ]
})
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

          <div className="chartTitle systemCTitle">
            <span>🌞 시스템 현황</span>

            <span className="chartDate">2021.04.20 15:20:26</span>
          </div>

            <div className="servercombobox">
              <select>
                <option defaultValue value="system">전체 서버</option>
              </select>
            </div>
          <div id="systemchart">
            {/* 시스템 현황차트 */}
          </div>

  
        </div>
      </div>
    );
  } 
}

export default LeftPanel;