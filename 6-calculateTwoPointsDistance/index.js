let mapOption = {
  center: L.latLng(35.699444, 51.337776),
  zoom: 15,
  maxZoom: 19,
  attribution: "behhhzaadddd",
  layers: [L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png")],
};

let map = L.map("root", mapOption);

let a, b;
map.on("click", (e) => {
  if (!a) {
    a = e.latlng;
    L.marker(a).addTo(map);
  } else if (!b) {
    b = e.latlng;
    L.marker(b).addTo(map);

    console.log({
      d1:
        Math.sqrt(Math.abs(a.lat - b.lat) ** 2 + Math.abs(a.lng - b.lng) ** 2) *
        10 ** 5,
      d2: Math.hypot(a.lat - b.lat, a.lng - b.lng) * 10 ** 5,
    });
  } else {
    return;
  }
});
