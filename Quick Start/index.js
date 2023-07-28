let LEAFLET = L;
let MAP = LEAFLET.map("map");

//+++++++++++++++++++++++++++++++++++++++ setView([Latitude, Longitude], zoom level)
MAP.setView([35.699444, 51.337776], 16);

//+++++++++++++++++++++++++++++++++++++++ tile layer
LEAFLET.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "behhhzaadddd",
}).addTo(MAP);

//+++++++++++++++++++++++++++++++++++++++  marker

let marker = LEAFLET.marker([35.6997, 51.3379]).addTo(MAP);

console.log({ marker });

//+++++++++++++++++++++++++++++++++++++++  circle

let circle = LEAFLET.circle([35.6997, 51.3379], {
  color: "#18edb4", // border color
  fillColor: "#18edb4", // background color
  fillOpacity: 0.3, // background Opacity
  radius: 500, // شعاع
}).addTo(MAP);
