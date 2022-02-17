import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { WeatherContext } from "../../utilities/globalContext";

export default function MinMaxTemperature(props: any) {
  const { weather } = useContext(WeatherContext);

  return (
    <div className="bubble col-span-5 flex flex-col justify-center text-center">
      <p className="font-bold text-3xl text-green-400">
        <FontAwesomeIcon icon={faArrowUp} className="scale-75" />
        {weather.forecast.forecastday[0].day.maxtemp_c}
      </p>
      <p className="font-bold text-3xl text-red-400">
        <FontAwesomeIcon icon={faArrowDown} className="scale-75" />
        {weather.forecast.forecastday[0].day.mintemp_c}
      </p>
    </div>
  )
}