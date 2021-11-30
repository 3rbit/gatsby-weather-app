import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperatureHalf,
  faSatelliteDish,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { usePosition } from "../hooks/usePosition";

export default function Layout({ children }) {
  const [location, setLocation] = useState("Melbourne");
  const [weather, setWeather] = useState(null);
  const formValue = useRef(null);

  const [position, setPosition] = usePosition();

  useEffect(() => {
    fetch(
      "https://api.weatherapi.com/v1/current.json?key=c23436de48204e978b245925210311&q=" +
        location
    )
      .then((response) => response.json())
      .then((data) => setWeather(data))
      .catch((err) => console.error(err));
  }, [, location]);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setLocation(formValue.current.value);
  }
  return (
    <div className="">
      <header>
        <form
          onSubmit={handleSubmit}
          className="container mx-auto my-1.5 rounded-full shadow-md p-5 flex items-center"
        >
          <input
            type="text"
            placeholder="Search Location"
            ref={formValue}
            className="w-full px-6 leading-tight focus:outline-none"
          />
          <input
            type="submit"
            value="Search"
            className="rounded-full w-28 h-12 p-2 bg-blue-500 active:bg-blue-300 focus:outline-none"
          />
        </form>
        <h1 className="font-bold text-3xl text-center py-5">{location}</h1>
      </header>
      {children}
      {/* {children({location, setLocation, position, setPosition, weather, setWeather,})} */}
      <div className="w-full py-4 rounded-t-xl bg-gray-700 text-white font-bold fixed bottom-0 left-1/2 -translate-x-2/4 flex items-center justify-center">
        <FontAwesomeIcon
          icon={faTemperatureHalf}
          className="flex-1 h-8"
          onClick={() => {
            console.log("hi world");
          }}
        />
        <FontAwesomeIcon
          icon={faSatelliteDish}
          className="flex-1 h-8"
          onClick={() => {
            console.log("hi world");
          }}
        />
        <FontAwesomeIcon
          icon={faGear}
          className="flex-1 h-8"
          onClick={() => {
            console.log("hi world");
          }}
        />
      </div>
      <footer>
        <div className="">This is a weather app made by Jeremy.</div>
      </footer>
    </div>
  );
}
