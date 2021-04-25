import React, { useEffect } from "react"
import "./css/Map.css"
const { naver } = window;

function Map() {

  useEffect(() => {
    const map = new naver.maps.Map(document.getElementById("map"), {
      center: new naver.maps.LatLng(37.4636632, 126.9028215),
      zoom: 14,
    });

    var polygon = new naver.maps.Polygon({
      map: map,
      paths: [[]],
      fillColor: '#ff0000',
      fillOpacity: 0.3,
      strokeColor: '#ff0000',
      strokeOpacity: 0.6,
      strokeWeight: 3,
      clickable: true
  });
  
  // naver.maps.Event.addListener(map, 'click', function(e) {
  
  //     var point = e.coord;
  
  //     var path = polygon.getPaths().getAt(0);
  //     path.push(point);
  
  //     console.log(path._array)
  //     // console.log(polygon)
  // });

  new naver.maps.Polygon({
    map: map,
    paths: [
        [
            new naver.maps.LatLng(37.4657921, 126.8895607),
            new naver.maps.LatLng(37.4717188, 126.8870716),
            new naver.maps.LatLng(37.4754653, 126.8926506),
            new naver.maps.LatLng(37.4768957, 126.8957405),
            new naver.maps.LatLng(37.4768957, 126.8986587),
            new naver.maps.LatLng(37.4789392, 126.8990879),
            new naver.maps.LatLng(37.4795522, 126.8977146),
            new naver.maps.LatLng(37.4791435, 126.889904),
            new naver.maps.LatLng(37.4820723, 126.8863849),

            new naver.maps.LatLng(37.4864312, 126.8786602),
            new naver.maps.LatLng(37.4846605, 126.8734245),
            new naver.maps.LatLng(37.4788029, 126.8758277),
            new naver.maps.LatLng(37.4698795, 126.8820076),
            new naver.maps.LatLng(37.4650428, 126.8862991)
        ]
      ],
      fillColor: '#EFBE85',
      fillOpacity: 0.7,
      strokeColor: '#343A3F',
      strokeOpacity: 0.6,
      strokeWeight: 3
  });

  new naver.maps.Polygon({
    map: map,
    paths: [
        [
            new naver.maps.LatLng(37.4786497, 126.8992166),
            new naver.maps.LatLng( 37.4663882, 126.8978433),
            new naver.maps.LatLng(37.4633907, 126.8972425),
            new naver.maps.LatLng(37.4618919, 126.8977575),
            new naver.maps.LatLng(37.4612787, 126.8956117),
            new naver.maps.LatLng(37.4600524, 126.8960409),
            new naver.maps.LatLng(37.4584854, 126.8926935),
            new naver.maps.LatLng(37.4622325, 126.8884019),
            new naver.maps.LatLng(37.4625732, 126.8851404),
            new naver.maps.LatLng(37.464617, 126.8839387),
            new naver.maps.LatLng(37.465162, 126.886342),
            new naver.maps.LatLng(37.4659114, 126.8895177),
            new naver.maps.LatLng(37.4715655, 126.8872003),
            new naver.maps.LatLng(37.4752439, 126.8926076),
            new naver.maps.LatLng(37.4768106, 126.8956117),
            new naver.maps.LatLng(37.4769468, 126.89853)
        ]
      ],
      fillColor: '#6DDBE8',
      fillOpacity: 0.7,
      strokeColor: '#343A3F',
      strokeOpacity: 0.6,
      strokeWeight: 3
  });

  new naver.maps.Polygon({
    map: map,
    paths: [
        [
            new naver.maps.LatLng(37.4787859, 126.8990449),
            new naver.maps.LatLng(37.4805228, 126.9084863),
            new naver.maps.LatLng(37.4768106, 126.9088726),
            new naver.maps.LatLng(37.4742903, 126.9080143),
            new naver.maps.LatLng(37.4720764, 126.9047098),
            new naver.maps.LatLng(37.4722808, 126.9026928),
            new naver.maps.LatLng(37.4713952, 126.9024782),
            new naver.maps.LatLng(37.4716677, 126.8984441),
        ]
      ],
      fillColor: '#90D8C9',
      fillOpacity: 0.7,
      strokeColor: '#343A3F',
      strokeOpacity: 0.6,
      strokeWeight: 3
  });

  
  new naver.maps.Polygon({
    map: map,
    paths: [
        [
            new naver.maps.LatLng(37.4715315, 126.8984871),
            new naver.maps.LatLng(37.4712931, 126.902564),
            new naver.maps.LatLng(37.4722127, 126.9027786),
            new naver.maps.LatLng(37.4719402, 126.9047527),
            new naver.maps.LatLng(37.472996, 126.9060831),
            new naver.maps.LatLng(37.4672398, 126.9074564),
            new naver.maps.LatLng(37.4664223, 126.9017915),
            new naver.maps.LatLng(37.4663542, 126.8978862),
        ]
      ],
      fillColor: '#BFD39E',
      fillOpacity: 0.7,
      strokeColor: '#343A3F',
      strokeOpacity: 0.6,
      strokeWeight: 3
  });

  
  new naver.maps.Polygon({
    map: map,
    paths: [
        [
            new naver.maps.LatLng(37.4662861, 126.8978648),
            new naver.maps.LatLng(37.4634588, 126.897221),
            new naver.maps.LatLng(37.4604271, 126.8984656),
            new naver.maps.LatLng(37.4624369, 126.904345),
            new naver.maps.LatLng(37.4658432, 126.9081645),
            new naver.maps.LatLng(37.4670695, 126.9074349)
        ]
      ],
      fillColor: '#90D8C9',
      fillOpacity: 0.7,
      strokeColor: '#343A3F',
      strokeOpacity: 0.6,
      strokeWeight: 3
  });


  new naver.maps.Polygon({
    map: map,
    paths: [
        [
            new naver.maps.LatLng(37.4623006, 126.9044523),
            new naver.maps.LatLng(37.465707, 126.9081859),
            new naver.maps.LatLng(37.4645829, 126.9125633),
            new naver.maps.LatLng(37.4602568, 126.9133787),
            new naver.maps.LatLng(37.456271, 126.9082288),
            new naver.maps.LatLng(37.4564073, 126.9056968),
        ]
      ],
      fillColor: '#EFBE85',
      fillOpacity: 0.7,
      strokeColor: '#343A3F',
      strokeOpacity: 0.6,
      strokeWeight: 3
  });


  new naver.maps.Polygon({
    map: map,
    paths: [
        [
            new naver.maps.LatLng(37.4583832, 126.8926935),
            new naver.maps.LatLng(37.4600183, 126.895998),
            new naver.maps.LatLng(37.4612106, 126.8956117),
            new naver.maps.LatLng(37.4617215, 126.8978862),
            new naver.maps.LatLng(37.4604952, 126.8986158),
            new naver.maps.LatLng(37.4622325, 126.9043665),
            new naver.maps.LatLng(37.4521829, 126.9061689),
            new naver.maps.LatLng(37.4493211, 126.9053535),
            new naver.maps.LatLng(37.4485374, 126.903079),
            new naver.maps.LatLng(37.4472768, 126.9034223),
            new naver.maps.LatLng(37.4457777, 126.8997745),
            new naver.maps.LatLng(37.4404282, 126.9005041),
        ]
      ],
      fillColor: '#D6D089',
      fillOpacity: 0.7,
      strokeColor: '#343A3F',
      strokeOpacity: 0.6,
      strokeWeight: 3
  });

  new naver.maps.Polygon({
    map: map,
    paths: [
        [
            new naver.maps.LatLng(37.4404282, 126.9005041),
            new naver.maps.LatLng(37.4376682, 126.9019203),
            new naver.maps.LatLng(37.437123, 126.9065122),
            new naver.maps.LatLng(37.4400193, 126.9111042),
            new naver.maps.LatLng(37.4447896, 126.9082288),
            new naver.maps.LatLng(37.4492188, 126.9054823),
            new naver.maps.LatLng(37.4484352, 126.9031648),
            new naver.maps.LatLng(37.4473109, 126.9033365),
            new naver.maps.LatLng(37.4456073, 126.8998603),
        ]
      ],
      fillColor: '#EFBE85',
      fillOpacity: 0.7,
      strokeColor: '#343A3F',
      strokeOpacity: 0.6,
      strokeWeight: 3
  });

  new naver.maps.Polygon({
    map: map,
    paths: [
        [
            new naver.maps.LatLng(37.4493211, 126.9053964),
            new naver.maps.LatLng(37.4520466, 126.9061689),
            new naver.maps.LatLng(37.456271, 126.9053106),
            new naver.maps.LatLng(37.456237, 126.9084434),
            new naver.maps.LatLng(37.4602227, 126.9133787),
            new naver.maps.LatLng(37.4592348, 126.9146232),
            new naver.maps.LatLng(37.4519785, 126.9144086),
            new naver.maps.LatLng(37.4455051, 126.9180994),
            new naver.maps.LatLng(37.4400193, 126.9109325),
        ]
      ],
      fillColor: '#6DDBE8',
      fillOpacity: 0.7,
      strokeColor: '#343A3F',
      strokeOpacity: 0.6,
      strokeWeight: 3
  });

  new naver.maps.Polygon({
    map: map,
    paths: [
        [
            new naver.maps.LatLng(37.4591667, 126.9145803),
            new naver.maps.LatLng(37.4520125, 126.9143657),
            new naver.maps.LatLng(37.4455392, 126.9179706),
            new naver.maps.LatLng(37.449798, 126.922348),
            new naver.maps.LatLng(37.4568502, 126.9206314)
        ]
      ],
      fillColor: '#90D8C9',
      fillOpacity: 0.7,
      strokeColor: '#343A3F',
      strokeOpacity: 0.6,
      strokeWeight: 3
  });


  }, []);

  return (
    <div id="map" style={{ width: "1920px", height: "1080px" }} >

    </div>
  )
}

export default Map;