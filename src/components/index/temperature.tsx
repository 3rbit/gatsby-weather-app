import React, { useContext } from "react";
import { WeatherContext } from "../../utilities/globalContext";

export function Temperature({ className }: { className: string }) {
  const currentWeather = useContext(WeatherContext).weather.current;

  return (
    <div className={`${className} py-5 flex items-center justify-center`}>
      <p className="text-white font-bold text-6xl">
        {currentWeather.temp_c}
        <sup className="text-2xl pl-2">°C</sup>
      </p>
    </div>
  )
}