import React, { useContext } from "react";
import { WeatherContext } from "../../utilities/globalContext";

export default function Temperature(props: any) {
  const { weather } = useContext(WeatherContext);

  return (
    <div className="col-span-7 row-span-1 rounded-3xl bg-gray-800 shadow-md text-white py-5 text-center">
      <p className="font-bold text-6xl">
        {weather.current.temp_c}
        <sup className="text-2xl pl-2">°C</sup>
      </p>
    </div>
  )
}