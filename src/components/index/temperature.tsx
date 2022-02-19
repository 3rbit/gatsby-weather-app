import React, { useContext } from "react";
import { WeatherContext } from "../../utilities/globalContext";

export function Temperature({ className }: { className: string }) {
  const currentWeather = useContext(WeatherContext).weather.current;

  return (
    <div className={`${className} py-5 flex items-center justify-center text-white font-bold`}>
      <p className="text-6xl">
        {currentWeather.temp_c}
      </p>
      <sup className="text-2xl">°C</sup>
    </div>
  )
}