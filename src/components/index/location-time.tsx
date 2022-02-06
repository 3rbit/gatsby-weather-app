import React, { useContext } from "react";
import { WeatherContext } from "../../utilities/globalContext";

export default function LocationTime(props: any) {
  const { weather } = useContext(WeatherContext);
  let date = new Date(weather.current.last_updated);

  return (
    <header className="col-span-full rounded-3xl shadow-md p-5 text-white bg-gradient-to-b from-indigo-500 to-pink-500 grid grid-cols-2">
      <h1 className="col-start-1 row-start-1 font-bold text-3xl justify-self-start self-end">{weather.location.name}</h1>
      <p className="col-start-1 row-start-2 font-bold italic text-lg justify-self-start self-start">{weather.location.region}</p>
      <p className="col-start-2 row-start-1 font-bold italic text-lg justify-self-end self-end">
        {date.toLocaleTimeString('en', { hour: 'numeric', minute: 'numeric' })}
      </p>
      <p className="col-start-2 row-start-2 font-bold italic text-md justify-self-end self-start">
        {date.toLocaleDateString()}
      </p>
    </header>
  )
}