import { faLocationDot, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DivIcon } from "leaflet";
// import { DivIcon } from "leaflet/src/layer/marker";
import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import { PositionContext } from "../utilities/globalContext";
import { WeatherMaps } from "../utilities/types";
import { dateToStringBOM } from "../utilities/utilities";

const id = "mapbox/satellite-v9";
const access_token = "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw";

let markerIcon: DivIcon = null
if (typeof window !== 'undefined') {
  markerIcon = new DivIcon({
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
}

export default function Radar() {
  // const [time, setTime] = useState(0);
  const [path, setPath] = useState('')
  const { position } = useContext(PositionContext);
  const radarRef = useRef(null)

  // Radar Loop
  useAsync(rainViewerWeatherMaps, (data) => {
    let past = data.radar.past
    setPath(past[0].path)

    past.forEach((frame, i) => {
      setTimeout(() => {
        if (i > 0) {
          radarRef.current.setUrl(`${data.host}/${frame.path}/256/{z}/{x}/{y}/1/1_1.png`)
        }
        console.log(radarRef.current._url);
      }, 2000 * i);
    })
  })

  return (
    <MapContainer
      center={position}
      zoom={13}
      maxZoom={10}
      zoomControl={false}
      className="h-screen w-screen z-0"
    >
      <TileLayer
        attribution='Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
        url={`https://api.mapbox.com/styles/v1/${id}/tiles/256/{z}/{x}/{y}?access_token=${access_token}`}
      />
      {path.length > 0 &&
        <TileLayer
          url={`https://tilecache.rainviewer.com/${path}/256/{z}/{x}/{y}/1/1_1.png`}
          opacity={0.8}
          ref={radarRef}
        />
      }

      {/* <TileLayer
        url={`https://api.weather.bom.gov.au/v1/rainradar/tiles/${dateToStringBOM(datetime)}/{z}/{x}/{y}.png`}
      /> */}
      <Marker position={position} icon={markerIcon} />
      <ZoomControl />
    </MapContainer>
  );
}

function useAsync<T>(asyncFn: () => Promise<T>, onSuccess: (data: T) => void) {
  useEffect(() => {
    let isActive = true;
    asyncFn().then(data => {
      if (isActive) onSuccess(data);
    });
    return () => { isActive = false };
  }, [asyncFn, onSuccess]);
}

async function rainViewerWeatherMaps(): Promise<WeatherMaps> {
  // Available weather maps from Rainviewer API
  const response = await fetch("https://api.rainviewer.com/public/weather-maps.json")
  if (!response.ok) console.error(response.statusText);
  return await response.json()
}

function ZoomControl() {
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
