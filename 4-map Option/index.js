let mapOption = {
  center: L.latLng(35.699444, 51.337776),
  zoom: 16,
  zoomControl: false,
  maxZoom: 19,
  attribution: "behhhzaadddd",
  layers: [L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png")],
};

let map = L.map("root", mapOption);

map.on("click", (e) => {
  console.log({ e });
});
////+++++++++++++++++++++++++++++++++++++++
