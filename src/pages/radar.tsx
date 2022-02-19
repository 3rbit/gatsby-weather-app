import { faLocationDot, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DivIcon, LatLng } from "leaflet";
import React, { useContext, useRef } from "react";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import { PositionContext, WeatherMapsContext } from "../utilities/globalContext";

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
        className="h-screen w-screen z-0"
      >
        <TileLayer
          attribution='Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
          url={`https://api.mapbox.com/styles/v1/${id}/tiles/256/{z}/{x}/{y}?access_token=${access_token}`}
        />
        <RadarTileLayer />
        <Marker position={LatLngPosition} icon={markerIcon} />
        <ZoomControl />
      </MapContainer>
    )
  }
  return null
}

function RadarTileLayer(): JSX.Element {
  const { weatherMaps } = useContext(WeatherMapsContext)
  const radarRef = useRef(null)

  if (weatherMaps) {
    return (
      <TileLayer
        url={`https://tilecache.rainviewer.com/${weatherMaps.radar.past[0].path}/256/{z}/{x}/{y}/1/1_1.png`}
        opacity={0.8}
        ref={radarRef}
      />
    )
  }
  return null
}

function ZoomControl(): JSX.Element {
  const map = useMap()
  return (
    <div className="bubble m-5 z-[1000] flex flex-col fixed">
      <button className="p-5 pb-2.5" onClick={() => map.zoomIn()}>
        <FontAwesomeIcon icon={faPlus} className="text-white scale-110" />
      </button>
      <button className="p-5 pt-2.5" onClick={() => map.zoomOut()} >
        <FontAwesomeIcon icon={faMinus} className="text-white scale-110" />
      </button>
    </div>
  )
}
