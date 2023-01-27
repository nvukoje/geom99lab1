function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 5,
      center: { lat: 57.268, lng: -24.473 },
      mapTypeId: "terrain",
    });
    const flightPlanCoordinates = [
      { lat: 59.917, lng: 10.725 },
      { lat: 62.016, lng: -6.864 },
      { lat: 64.142, lng: -21.929 },
      { lat: 61.150, lng: -45.518 },
      { lat: 52.561, lng: -55.546 },
    ];
    const flightPath = new google.maps.Polyline({
      path: flightPlanCoordinates,
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 2,
    });
  
    flightPath.setMap(map);

    const NorwegianRoyalPalace = { lat: 59.917, lng: 10.725 };
    const contentString =
      '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">The Royal Palace of Norway</h1>' +
      '<div id="bodyContent">' +
      "<p>Leif's journey began after converting to " +
      "Christianity from King Olaf I Tryggvason of Norway</p>" +
      "</div>" +
      "</div>";
    const infowindow = new google.maps.InfoWindow({
      content: contentString,
      ariaLabel: "NorwegianRoyalPalace",
    });
    const marker = new google.maps.Marker({
      position:  NorwegianRoyalPalace,
      map,
      title: "Royal Palace of Norway",
    });
  
    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
      });
    });

    const FaroeIslands = { lat: 62.016, lng: -6.864 };
    const contentString1 =
      '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">The Faroe Islands</h1>' +
      '<div id="bodyContent">' +
      "<p>These islands were an itinerant place for " +
      "many vikings on their travels, Leif Erikson included</p>" +
      "</div>" +
      "</div>";
    const infowindow1 = new google.maps.InfoWindow({
      content: contentString1,
      ariaLabel: "FaroeIslands",
    });
    const marker1 = new google.maps.Marker({
      position:  FaroeIslands,
      map,
      title: "The Faroe Islands",
    });
  
    marker1.addListener("click", () => {
      infowindow1.open({
        anchor: marker1,
        map,
      });
    });
  }
  
  window.initMap = initMap;
  