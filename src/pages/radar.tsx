import React, { useContext, useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import { PositionContext } from "../utilities/globalContext";

const id = "mapbox/satellite-v9";
const access_token =
  "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw";
const bounds = [
  [-12.219233, 111.903211],
  [-45.83454, 156.404943],
];
// var datetime = "202112040530"
// 2021 12 24 01 00
// 2021 11 24 01 00

function dateToString(date: Date) {
  return (
    date.getUTCFullYear().toString() +
    (date.getUTCMonth() + 1).toString().padStart(2, "0") +
    date.getUTCDate().toString().padStart(2, "0") +
    date.getUTCHours().toString().padStart(2, "0") +
    (Math.floor(date.getUTCMinutes() / 10) * 10).toString().padStart(2, "0")
  );
}

// function setCenter() {
//   const { position } = useContext(PositionContext);

//   useEffect(() => {
//     const map = useMap();
//     console.log(map);
//   }, [position]);
// }

export default function Radar() {
  const [datetime, setDatetime] = useState(new Date());
  const { position } = useContext(PositionContext);

  console.log(position);

  return (
    <MapContainer
      center={position}
      zoom={13}
      maxZoom={10}
      scrollWheelZoom={false}
      className="h-screen w-screen z-0"
    >
      <TileLayer
        attribution='Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
        url={`https://api.mapbox.com/styles/v1/${id}/tiles/256/{z}/{x}/{y}?access_token=${access_token}`}
      />
      {/* <TileLayer url={`https://tilecache.rainviewer.com/v2/radar/${datetime}/256/{z}/{x}/{y}/1/1_1.png`} /> */}
      <TileLayer
        url={`https://api.weather.bom.gov.au/v1/rainradar/tiles/${dateToString(
          datetime
        )}/{z}/{x}/{y}.png`}
      />
      <Marker position={position} />
    </MapContainer>
  );
}
