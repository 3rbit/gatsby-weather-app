import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { WeatherContext } from "../../utilities/globalContext";

export function MinMaxTemperature({ className }: { className: string }) {
  const forecastToday = useContext(WeatherContext).weather.forecast.forecastday[0].day;

  return (
    <div className={`${className} flex flex-col justify-center text-center`}>
      <p className="font-bold text-3xl text-green-400">
        <FontAwesomeIcon icon={faArrowUp} className="scale-75" />
        {forecastToday.maxtemp_c}
      </p>
      <p className="font-bold text-3xl text-red-400">
        <FontAwesomeIcon icon={faArrowDown} className="scale-75" />
        {forecastToday.mintemp_c}
      </p>
    </div>
  )
}