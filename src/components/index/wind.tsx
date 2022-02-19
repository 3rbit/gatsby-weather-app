import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { WeatherContext } from "../../utilities/globalContext";

export function Wind({ className }: { className: string }) {
  const currentWeather = useContext(WeatherContext).weather.current;

  return (
    <div className={`${className} flex items-center justify-evenly`}>
      <FontAwesomeIcon
        icon={faLocationArrow}
        className="p-3"
        style={{ transform: `rotate(${currentWeather.wind_degree}deg) scale(3)` }}
      />
      <div className="font-bold text-3xl text-center">
        <p>{currentWeather.wind_kph}</p>
        <p className="text-base">km/h</p>
      </div>
    </div>
  )
}