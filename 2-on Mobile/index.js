let LEAFLET = L;
let MAP = LEAFLET.map("map").fitWorld();

//+++++++++++++++++++++++++++++++++++++++ tile layer
LEAFLET.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "behhhzaadddd",
}).addTo(MAP);

////+++++++++++++++++++++++++++++++++++++++
MAP.locate({ setView: true, maxZoom: 16 });
////+++++++++++++++++++++++++++++++++++++++

MAP.on("locationfound", (e) => {
  let radius = e.accuracy;

  LEAFLET.marker(e.latlng)
    .addTo(map)
    .bindPopup("You are within " + radius + " meters from this point")
    .openPopup();

  LEAFLET.circle(e.latlng, radius).addTo(MAP);
});

MAP.on("locationerror", (e) => {
  alert(e.message);
});
