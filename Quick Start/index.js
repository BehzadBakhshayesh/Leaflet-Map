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
