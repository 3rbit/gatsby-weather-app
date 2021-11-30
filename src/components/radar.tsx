import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Tooltip,
  useMap,
} from "react-leaflet";

const id = "mapbox/satellite-v9";
const access_token =
  "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw";

function test() {
  var map = useMap();
  map.flyTo;
}

const Radar = (props) => {
  const { position } = props.position;
  return (
    <MapContainer
      center={position}
      zoom={10}
      scrollWheelZoom={false}
      style={{ minHeight: "100vh", minWidth: "100vw" }}
    >
      <TileLayer
        attribution='Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
        url={`https://api.mapbox.com/styles/v1/${id}/tiles/256/{z}/{x}/{y}?access_token=${access_token}`}
      />
      <TileLayer url={`https://api.weather.bom.gov.au/v1/rainradar/tiles/202111190120/{z}/{y}/{x}.png`} />
      <Marker position={position}/>
      <Tooltip />
    </MapContainer>
  );
};

export default Radar;
