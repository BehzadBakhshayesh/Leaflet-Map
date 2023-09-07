let mapOption = {
  center: L.latLng(35.699444, 51.337776),
  zoom: 15,
  maxZoom: 19,
  attribution: "behhhzaadddd",
  layers: [L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png")],
};

let map = L.map("root", mapOption);

navigator.geolocation.getCurrentPosition(({ coords }) => {
  console.log("1", coords);
  const CurrentPosition = [coords.latitude, coords.longitude];
  map.setView(CurrentPosition, 16);
  L.popup(CurrentPosition, {
    content: "<p>موقعییت کنونی.</p>",
  }).openOn(map);
});

let target;

map.on("click", (e) => {
  if (!target) {
    const selectedLocation = e.latlng;
    L.marker(selectedLocation).addTo(map);
    target = {
      latitude: selectedLocation.lat,
      longitude: selectedLocation.lng,
    };

    // ================================== watchPosition
    let id = navigator.geolocation.watchPosition(
      ({ coords }) => {
        console.log("2", coords);
        const CurrentPosition = [coords.latitude, coords.longitude];
        map.setView(CurrentPosition, 16);
        L.popup(CurrentPosition, {
          content: "<p>موقعییت کنونی.</p>",
        }).openOn(map);

        if (
          target.latitude === coords.latitude &&
          target.longitude === coords.longitude
        ) {
          console.log("Congratulations, you reached the target");
          navigator.geolocation.clearWatch(id);
        }
      },
      (err) => {
        console.log({ err });
      },
      {
        enableHighAccuracy: false,
        maximumAge: 0,
      }
    );
  } else {
    return;
  }
});
