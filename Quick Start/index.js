let LEAFLET = L;
let map = LEAFLET.map("map");

// setView([Latitude, Longitude], zoom level)
map.setView([35.699444, 51.337776], 16);

// tile layer
LEAFLET.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "behhhzaadddd",
}).addTo(map);
