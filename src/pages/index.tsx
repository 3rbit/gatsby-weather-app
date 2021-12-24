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

  return (
    <>
      <header className="w-full py-5 shadow-md bg-gradient-to-b from-indigo-500 to-pink-500 text-white flex justify-evenly items-center">
        <h1 className="font-bold text-3xl">
          {`${weather.location.name}, ${weather.location.region}`}
        </h1>
        <Link to="/settings" className="">
          <FontAwesomeIcon icon={faGear} className="scale-150" />
        </Link>
      </header>
      <pre className="container p-5">
        {JSON.stringify(weather.current, undefined, 2)}
      </pre>
    </>
  );
}
