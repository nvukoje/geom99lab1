function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 5,
      center: { lat: 53.329, lng: -33.900 },
      mapTypeId: "terrain",
    });
    const flightPlanCoordinates = [
      { lat: 51.470, lng: -1.014 },
      { lat: 52.310, lng: 4.766 },
      { lat: 52.260, lng: 20.837 },
      { lat: 47.461, lng: 8.549 },
    ];
    const flightPath = new google.maps.Polyline({
      path: flightPlanCoordinates,
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 2,
    });
  
    flightPath.setMap(map);
  }
  
  window.initMap = initMap;
  