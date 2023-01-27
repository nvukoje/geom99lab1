function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 5,
      center: { lat: 57.268, lng: -24.473 },
      mapTypeId: "terrain",
    });
    const ExpeditionCoordinates = [
      { lat: 59.917, lng: 10.725 },
      { lat: 62.016, lng: -6.864 },
      { lat: 64.142, lng: -21.929 },
      { lat: 61.150, lng: -45.518 },
      { lat: 52.561, lng: -55.546 },
    ];
    const ShipsPath = new google.maps.Polyline({
      path: ExpeditionCoordinates,
      geodesic: true,
      strokeColor: "#CC0099",
      strokeOpacity: 1.0,
      strokeWeight: 2,
    });
  
    ShipsPath.setMap(map);

    const NorwegianRoyalPalace = { lat: 59.917, lng: 10.725 };
    const contentString =
      '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">The Royal Palace of Norway</h1>' +
      '<div id="bodyContent">' +
      "<p>Leif's journey began after converting to " +
      "Christianity from King Olaf I Tryggvason of Norway.</p>" +
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
      "many vikings on their travels, Leif Erikson included.</p>" +
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

    const LeifMonument = { lat: 64.142, lng: -21.929 };
    const contentString2 =
      '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Iceland, Home of Leif the Explorer</h1>' +
      '<div id="bodyContent">' +
      "<p>This island is the birthplace of Leif, as well as a " +
      "pitstop to Greenland, where he helped spread Christianity on behalf of " +
      "King Olaf. This was also where he heard about 'Vinland', from a trader who " + 
      "claimed to have sighted the North American Continent. A monument stands here to commemorate " +
      "Leif's adventures.</p>" +
      "</div>" +
      "</div>";
    const infowindow2 = new google.maps.InfoWindow({
      content: contentString2,
      ariaLabel: "LeifMonument",
    });
    const marker2 = new google.maps.Marker({
      position:  LeifMonument,
      map,
      title: "Birthplace of Leif Erikson",
    });
  
    marker2.addListener("click", () => {
      infowindow2.open({
        anchor: marker2,
        map,
      });
    });
  
    const Greenland = { lat: 61.150, lng: -45.518 };
    const contentString3 =
      '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Greenland, Saga of the Greenlanders</h1>' +
      '<div id="bodyContent">' +
      "<p>According to the Eiriks Saga, it is said " +
      "that Leif found North America from veering off course " +
      "on his return to Greenland. This is an unreliable source, " + 
      "but it is known that Leif had lived in Greenland, where his commission from " +
      "King Olaf was to spread the faith amongst Greenland settlers.</p>" +
      "</div>" +
      "</div>";
    const infowindow3 = new google.maps.InfoWindow({
      content: contentString3,
      ariaLabel: "Greenland",
    });
    const marker3 = new google.maps.Marker({
      position:  Greenland,
      map,
      title: "Greenland Settled",
    });
  
    marker3.addListener("click", () => {
      infowindow3.open({
        anchor: marker3,
        map,
      });
    });

    const Vinland = { lat: 52.561, lng: -55.546 };
    const contentString4 =
      '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Vinland, the Dark Continent</h1>' +
      '<div id="bodyContent">' +
      "<p>Although accounts of whether Leif's exact landings are in doubt, " +
      "excavations in the 1960's at L'Anse aux Meadows " +
      "show a base camp of 11th century viking exploration! " + 
      "This evidence was groundbreaking, and showed that the " +
      "first European actually arrived 4 centuries before Christopher Columbus!</p>" +
      "</div>" +
      "</div>";
    const infowindow4 = new google.maps.InfoWindow({
      content: contentString4,
      ariaLabel: "Vinland",
    });
    const marker4 = new google.maps.Marker({
      position:  Vinland,
      map,
      title: "Vinland, Canada in the Past",
    });
  
    marker4.addListener("click", () => {
      infowindow4.open({
        anchor: marker4,
        map,
      });
    });
  }
  
  window.initMap = initMap;
  