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

  return (
    <>
      <header className="content-full py-5 bg-gradient-to-b from-indigo-500 to-pink-500 flex justify-around items-center">
        <div className="flex-col">
          <h1 className="font-bold text-4xl">{weather.location.name}</h1>
          <p className="font-bold italic text-xl">
            {weather.location.region}
          </p>
        </div>
        <div className="flex-col text-right">
          <p className="font-bold italic text-2xl">{date.toLocaleTimeString()}</p>
          <p className="font-bold italic text-md">{date.toLocaleDateString()}</p>
        </div>
        {/* <Link to="/settings" className="">
          <FontAwesomeIcon icon={faGear} className="scale-150" />
        </Link> */}
      </header>
      <pre className="container p-5">
        {JSON.stringify(weather.current, undefined, 2)}
      </pre>
    </>
  );
}
