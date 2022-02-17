import React from "react";
import Condition from "../components/index/condition";
import ForecastGraph from "../components/index/forecastGraph";
import LocationTime from "../components/index/locationTime";
import MinMaxTemperature from "../components/index/minMaxTemp";
import Temperature from "../components/index/temperature";
import Wind from "../components/index/wind";

export default function Index(props: any) {
  return <>
    <div className="grid grid-cols-12 gap-5 p-5 h-[85vh]">
      <LocationTime />
      <Temperature />
      <MinMaxTemperature />
      <Condition />
      <Wind />
      <div className="bubble col-span-full">
        <ForecastGraph />
      </div>
    </div>
    {/* </div> */}

    {/* <pre className="container p-5">
        {JSON.stringify(weather.forecast, undefined, 2)}
      </pre> */}
  </>
}
