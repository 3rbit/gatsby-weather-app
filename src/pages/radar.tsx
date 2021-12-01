import React, { useContext } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { PositionContext } from "../utilities/globalContext";

const id = "mapbox/satellite-v9";
const access_token =
  "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw";

// function test() {
//   var map = useMap()
//   map.flyTo
// }

export default function Radar() {
  const { position } = useContext(PositionContext);
  return (
    <MapContainer
      center={position}
      zoom={10}
      scrollWheelZoom={false}
      style={{ minHeight: "80vh", minWidth: "100vw" }}
    >
      <TileLayer
        attribution='Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
        url={`https://api.mapbox.com/styles/v1/${id}/tiles/256/{z}/{x}/{y}?access_token=${access_token}`}
      />
      <Marker position={position} />
    </MapContainer>
  );
}
