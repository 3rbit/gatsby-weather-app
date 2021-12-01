import React, { useContext } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { PositionContext } from "../utilities/globalContext";

const id = "mapbox/satellite-v9";
const access_token =
  "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw";
var datetime = "1638339600"
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
      style={{ minHeight: "75vh", minWidth: "100vw" }}
      bounds
    >
      <TileLayer
        attribution='Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
        url={`https://api.mapbox.com/styles/v1/${id}/tiles/256/{z}/{x}/{y}?access_token=${access_token}`}
      />
      {/* <TileLayer url={`https://tilecache.rainviewer.com/v2/radar/${datetime}/256/{z}/{x}/{y}/1/1_1.png`} /> */}
      <TileLayer url={`https://api.weather.bom.gov.au/v1/rainradar/tiles/202112010750/{z}/{x}/{y}.png`}/>
      <Marker position={position} />
    </MapContainer>
  );
}
