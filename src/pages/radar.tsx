import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { divIcon, point } from "leaflet";
import React, { useContext, useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { PositionContext } from "../utilities/globalContext";
import { dateToStringBOM } from "../utilities/utilities";

const id = "mapbox/satellite-v9";
const access_token = "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw";
const markerIcon = divIcon({
  html:
    `<svg
      style="transform-origin:top left; transform:scale(2.5)"
      viewBox="0 0 ${faLocationDot.icon[0]} ${faLocationDot.icon[1]}"
    >
      <path 
        fill="#f8fafc"
        d="${faLocationDot.icon[4]}">
      </path>
    </svg>`,
  iconAnchor: point([15, 40]),
  className: "markerIcon",
})

export default function Radar() {
  const [datetime, setDatetime] = useState(new Date());
  const { position } = useContext(PositionContext);

  return (
    <MapContainer
      center={position}
      zoom={13}
      maxZoom={10}
      scrollWheelZoom={true}
      className="h-screen w-screen z-0"
    >
      <TileLayer
        attribution='Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
        url={`https://api.mapbox.com/styles/v1/${id}/tiles/256/{z}/{x}/{y}?access_token=${access_token}`}
      />
      {/* <TileLayer url={`https://tilecache.rainviewer.com/v2/radar/${datetime}/256/{z}/{x}/{y}/1/1_1.png`} /> */}
      <TileLayer
        url={`https://api.weather.bom.gov.au/v1/rainradar/tiles/${dateToStringBOM(datetime)}/{z}/{x}/{y}.png`}
      />
      <Marker position={position} icon={markerIcon} />
    </MapContainer>
  );
}
