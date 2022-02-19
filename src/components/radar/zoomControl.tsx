import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useMap } from "react-leaflet";

export function CustomZoomControl(): JSX.Element {
  const map = useMap();
  return (
    <div className="bubble m-5 z-[1000] flex flex-col fixed">
      <button className="p-5 pb-2.5" onClick={() => map.zoomIn()}>
        <FontAwesomeIcon icon={faPlus} className="text-white scale-110" />
      </button>
      <button className="p-5 pt-2.5" onClick={() => map.zoomOut()}>
        <FontAwesomeIcon icon={faMinus} className="text-white scale-110" />
      </button>
    </div>
  );
}
