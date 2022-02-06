import React, { useContext } from "react";
import { WeatherContext } from "../../utilities/globalContext";

export default function LocationTime(props: any) {
  const { weather } = useContext(WeatherContext);
  let date = new Date(weather.current.last_updated);

  return (
    <div className="col-span-full">
      <header className="rounded-3xl shadow-md text-white py-5 bg-gradient-to-b from-indigo-500 to-pink-500 flex justify-around items-center gap-5">
        <div className="flex-col m-0 pl-5">
          <h1 className="font-bold text-3xl">{weather.location.name}</h1>
          <p className="font-bold italic text-lg">{weather.location.region}</p>
        </div>
        <div className="flex-col m-0 pr-5 text-right">
          <p className="font-bold italic text-lg">
            {date.toLocaleTimeString('en', {hour: 'numeric', minute:'numeric'})}
          </p>
          <p className="font-bold italic text-md">
            {date.toLocaleDateString()}
          </p>
        </div>
      </header>
    </div>
  )
}