import {
  faGear,
  faMagnifyingGlass,
  faSatelliteDish,
  faTemperatureHalf,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import React, { useContext } from "react";
import { WeatherContext } from "../utilities/globalContext";

export default function Index(props: any) {
  const { weather } = useContext(WeatherContext);
  let date = new Date();

  console.log(weather)

  return (
    <>
      <div className="grid grid-cols-12 gap-5 p-5">

        {/* Location and Time row */}
        <div className="col-span-12">
          <header className="rounded-3xl shadow-md text-white py-5 bg-gradient-to-b from-indigo-500 to-pink-500 flex justify-around items-center gap-5">
            <div className="flex-col m-0 pl-5">
              <h1 className="font-bold text-3xl">{weather.location.name}</h1>
              <p className="font-bold italic text-lg">{weather.location.region}</p>
            </div>
            <div className="flex-col m-0 pr-5 text-right">
              <p className="font-bold italic text-xl">
                {date.toLocaleTimeString()}
              </p>
              <p className="font-bold italic text-md">
                {date.toLocaleDateString()}
              </p>
            </div>
            {/* <Link to="/settings" className="">
            <FontAwesomeIcon icon={faGear} className="scale-150" />
          </Link> */}
          </header>
        </div>

        {/* Temperature */}
        <div className="col-span-8 row-span-1 rounded-3xl bg-gray-800 shadow-md text-white py-10 text-center">
          <p className="font-bold text-7xl">{weather.current.temp_c}<sup className="text-2xl pl-2">°C</sup></p>
        </div>

        {/* Max min temperature */}
        <div className="col-span-4 rounded-3xl bg-gray-800 shadow-md text-white py-5 flex flex-col justify-evenly text-center">
          <p className="font-bold text-3xl text-green-400">🠕{weather.forecast.forecastday[0].day.maxtemp_c}</p>
          <p className="font-bold text-3xl text-red-400">🠗{weather.forecast.forecastday[0].day.mintemp_c}</p>
        </div>
        
        {/* Weather description row */}
        <div className="col-span-5 rounded-3xl bg-gray-800 shadow-md text-white py-5 flex items-center justify-center">
          <p className="font-bold text-2xl pl-5">
          {weather.current.condition.text}
          </p>
          <img src={weather.current.condition.icon} className="aspect-square"/>
        </div>
        
        <div className="col-span-8 rounded-3xl bg-gray-800 shadow-md text-white py-5 text-center">0</div>
      </div>
      <pre className="container p-5">
        {JSON.stringify(weather.current, undefined, 2)}
      </pre>
    </>
  );
}
