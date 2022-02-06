import React, { useContext } from "react";
import { WeatherContext } from "../../utilities/globalContext";

export default function Condition(props: any) {
  const { weather } = useContext(WeatherContext);

  return (
    <div className="bubble col-span-5 pb-5 flex flex-col items-center justify-center">
      <img src={weather.current.condition.icon} className="aspect-square" />
      <p className="font-bold text-2xl">{weather.current.condition.text}</p>
    </div>
  )
}