let mapOption = {
  center: L.latLng(35.699444, 51.337776),
  zoom: 15,
  maxZoom: 19,
  attribution: "behhhzaadddd",
  layers: [L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png")],
};

let map = L.map("root", mapOption);

const button = document.getElementById("button");

button.addEventListener("click", () => {
  const inputValue = document.getElementById("input").value;
  if (navigator.geolocation) {
    const onSuccess = (res) => {
      const CurrentPosition = [res.coords.latitude, res.coords.longitude];

      console.log(
        Math.sqrt(
          Math.abs(res.coords.latitude - 35.699444) ** 2 +
            Math.abs(res.coords.longitude - 51.337776) ** 2
        ) *
          10 ** 5
      );

      map.setView(CurrentPosition, 16);

      L.circle(CurrentPosition, {
        color: "#18edb4",
        fillColor: "#18edb4",
        fillOpacity: 0.3,
        radius: inputValue,
      }).addTo(map);

      L.circle(CurrentPosition, {
        color: "red",
        fillColor: "red",
        fillOpacity: 0.9,
        radius: 8,
      }).addTo(map);

      L.popup(CurrentPosition, {
        content: "<p>موقعییت کنونی.</p>",
      }).openOn(map);
    };

    const onFailed = (err) => {
      console.log({ err });
    };

    const options = { timeout: 10000, enableHighAccuracy: true };

    navigator.geolocation.getCurrentPosition(onSuccess, onFailed, options);
  } else {
    console.log("err message");
  }
});
let a, b;
map.on("click", (e) => {
  if (!a) {
    a = e.latlng;
    L.marker(a).addTo(map);
  } else if (!b) {
    b = e.latlng;
    L.marker(b).addTo(map);

    console.log(
      Math.sqrt(Math.abs(a.lat - b.lat) ** 2 + Math.abs(a.lng - b.lng) ** 2) *
        10 ** 5
    );
  } else {
    return;
  }
});
