import React, { useContext } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { PositionContext } from "../utilities/globalContext";


const id = "mapbox/satellite-v9";
const access_token =
"pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw";
var datetime = "202112040530";
const bounds = [
  [-12.219233, 111.903211],
  [-45.834540, 156.404943],
];

export default function Radar() {
  const { position } = useContext(PositionContext);

  return (
    <MapContainer
      maxZoom={10}
      scrollWheelZoom={false}
      className="h-screen w-screen z-0"
      bounds={bounds}
    >
      <TileLayer
        attribution='Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
        url={`https://api.mapbox.com/styles/v1/${id}/tiles/256/{z}/{x}/{y}?access_token=${access_token}`}
      />
      {/* <TileLayer url={`https://tilecache.rainviewer.com/v2/radar/${datetime}/256/{z}/{x}/{y}/1/1_1.png`} /> */}
      <TileLayer
        url={`https://api.weather.bom.gov.au/v1/rainradar/tiles/${datetime}/{z}/{x}/{y}.png`}
      />
      <Marker position={position} />
    </MapContainer>
  );
}
