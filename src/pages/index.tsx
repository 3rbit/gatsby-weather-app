import React, { useContext } from "react";
import { LocationTime, Temperature, MinMaxTemperature, Condition, Wind, ForecastGraph } from "../components/index";
import { WeatherContext } from "../utilities/globalContext";

export default function Index() {
  const {weather} = useContext(WeatherContext)
  
  if (weather)
    return (
      <div className="grid grid-cols-12 gap-5 p-5 h-[85vh]">
        <LocationTime className="bubble col-span-full" />
        <Temperature className="bubble col-span-7" />
        <MinMaxTemperature className="bubble col-span-5" />
        <Condition className="bubble col-span-5" />
        <Wind className="bubble col-span-7" />
        <ForecastGraph className="bubble col-span-full" />
      </div>
    )
  return null
}
