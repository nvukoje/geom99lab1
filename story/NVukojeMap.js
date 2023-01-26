function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4.75,
      center: { lat: 61.108, lng: -26.332 },
      mapTypeId: "terrain",
    });
    const flightPlanCoordinates = [
      { lat: 64.142, lng: -21.929 },
      { lat: 62.016, lng: -6.864 },
      { lat: 59.917, lng: 10.725 },
      { lat: 61.150, lng: -45.518 },
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
  