let LEAFLET = L;
let MAP = LEAFLET.map("map").fitWorld();

//+++++++++++++++++++++++++++++++++++++++ tile layer
LEAFLET.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "behhhzaadddd",
}).addTo(MAP);

////+++++++++++++++++++++++++++++++++++++++
MAP.locate({ setView: true, maxZoom: 15 });
////+++++++++++++++++++++++++++++++++++++++  user current locatio

MAP.on("locationfound", (e) => {
  console.log(e);
  let radius = e.accuracy;

  LEAFLET.marker(e.latlng)
    .addTo(MAP)
    .bindPopup("You are within " + radius + " meters from this point")
    .openPopup();

  LEAFLET.circle(e.latlng, radius).addTo(MAP);
  LEAFLET.circle(e.latlng, {
    color: "#18edb4",
    fillColor: "#18edb4",
    fillOpacity: 0.3,
    radius: 1000,
  }).addTo(MAP);
});

MAP.on("locationerror", (e) => {
  alert(e.message);
});
