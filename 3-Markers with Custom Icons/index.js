let LEAFLET = L;
let MAP = LEAFLET.map("map");

//+++++++++++++++++++++++++++++++++++++++ tile layer
LEAFLET.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "behhhzaadddd",
}).addTo(MAP);
////+++++++++++++++++++++++++++++++++++++++

MAP.setView([35.699444, 51.337776], 16);

////+++++++++++++++++++++++++++++++++++++++
let icon = LEAFLET.icon({
  iconUrl: "./icon/pin.png",
  iconSize: [40, 40],
});

LEAFLET.marker([35.7001, 51.3381], { icon }).addTo(MAP);
