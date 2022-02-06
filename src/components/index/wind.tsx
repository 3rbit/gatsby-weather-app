import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { WeatherContext } from "../../utilities/globalContext";

export default function Wind(props: any) {
  const { weather } = useContext(WeatherContext);

  return (
    <div className="col-span-7 rounded-3xl bg-gray-800 shadow-md text-white flex items-center justify-evenly">
      <FontAwesomeIcon icon={faLocationArrow} className="p-3" style={{ transform: `rotate(${weather.current.wind_degree}deg) scale(3)` }} />
      <p className="flex-initial font-bold text-3xl text-center">
        {weather.current.wind_kph}
        <p className="text-base">km/h</p>
      </p>
    </div>
  )
}