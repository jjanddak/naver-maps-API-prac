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
  
  naver.maps.Event.addListener(map, 'click', function(e) {
  
      var point = e.coord;
  
      var path = polygon.getPaths().getAt(0);
      path.push(point);
  
      console.log(path)
      // console.log(polygon)
  });

  var polygon2 = new naver.maps.Polygon({
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
      fillColor: '#ff0000',
      fillOpacity: 0.3,
      strokeColor: '#ff0000',
      strokeOpacity: 0.6,
      strokeWeight: 3
  });
  
  }, []);

  return (
    <div id="map" style={{ width: "100vw", height: "100vh" }} >

    </div>
  )
}

export default Map;