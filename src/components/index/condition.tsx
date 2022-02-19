import React, { useContext } from "react";
import { WeatherContext } from "../../utilities/globalContext";

export function Condition({ className }: { className: string }) {
  const condition = useContext(WeatherContext).weather.current.condition;
  return (
    <div className={`${className} flex flex-col items-center justify-center`}>
      <img src={condition.icon} className="aspect-square" />
      <p className="font-bold text-2xl text-center pb-5 ">{condition.text}</p>
    </div>
  )
}