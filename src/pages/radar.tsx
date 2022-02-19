import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { DivIcon, LatLng } from "leaflet";
import React, { useContext } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { CustomZoomControl, RadarTileLayer } from "../components/radar";
import { PositionContext } from "../utilities/globalContext";

const id = "mapbox/satellite-v9";
const access_token = "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw";

const markerIcon = (typeof window === 'undefined') ? null : new DivIcon({
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
  iconAnchor: [15, 40],
  className: "markerIcon"
})

export default function Radar() {
  const { position } = useContext(PositionContext)

  if (position) {
    const LatLngPosition = new LatLng(position.lat, position.lon)

    return (
      <MapContainer
        center={LatLngPosition}
        zoom={13}
        maxZoom={10}
        zoomControl={false}
        fadeAnimation={false}
        className="h-screen w-screen z-0"
      >
        <TileLayer
          attribution='Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
          url={`https://api.mapbox.com/styles/v1/${id}/tiles/256/{z}/{x}/{y}?access_token=${access_token}`}
        />
        <RadarTileLayer />
        <Marker position={LatLngPosition} icon={markerIcon} />
        <CustomZoomControl />
      </MapContainer>
    )
  }
  return null
}


