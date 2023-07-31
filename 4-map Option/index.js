let mapOption = {
  center: L.latLng(35.699444, 51.337776),
  zoom: 16,
  zoomControl: false,
  maxZoom: 19,
  attribution: "behhhzaadddd",
  layers: [L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png")],
};

let map = L.map("root", mapOption);

////+++++++++++++++++++++++++++++++++++++++

map.on("click", (e) => {
  L.marker(e.latlng).addTo(map);
});
map.on("dblclick", (e) => {
  L.popup(e.latlng, {
    content: "<p>Hello world!<br />This is a nice popup.</p>",
  }).openOn(map);
});

map.on("move", (e) => {});
map.on("movestart", (e) => {
  console.log({ movestart: e });
});

map.on("zoomlevelschange", (e) => {
  console.log({ zoomlevelschange: e });
});
map.on("zoomstart", (e) => {
  console.log({ movezoomstartstart: e });
});

map.on("resize", (e) => {
  console.log({ resize: e });
});

map.on("load", (e) => {
  console.log({ load: e });
});
map.on("unload", (e) => {
  console.log({ unload: e });
});

map.on("popupopen", (e) => {
  console.log({ popupopen: e });
});

map.on("locationfound", (e) => {
  console.log({ locationfound: e });
});
map.on("locationerror", (e) => {
  console.log({ locationerror: e });
});
