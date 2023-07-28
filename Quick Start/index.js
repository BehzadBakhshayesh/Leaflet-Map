let LEAFLET = L;
let map = LEAFLET.map("map");

// setView([Latitude, Longitude], zoom level)
map.setView([51.505, -0.09], 13);

// tile layer
LEAFLET.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "behhhzaadddd",
}).addTo(map);
