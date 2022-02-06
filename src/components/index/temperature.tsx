import React, { useContext } from "react";
import { WeatherContext } from "../../utilities/globalContext";

export default function Temperature(props: any) {
  const { weather } = useContext(WeatherContext);

  return (
    <div className="bubble col-span-7 py-5 flex items-center justify-center">
      <p className="text-white font-bold text-6xl">
        {weather.current.temp_c}
        <sup className="text-2xl pl-2">°C</sup>
      </p>
    </div>
  )
}