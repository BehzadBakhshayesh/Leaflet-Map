let LEAFLET = L;
let map = LEAFLET.map("map");

map.setView([51.505, -0.09], 13); // setView([Latitude, Longitude], zoom level)

LEAFLET.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "behhhzaadddd",
}).addTo(map);
