import React, { FormEvent, useRef } from "react";
import { PositionContext, WeatherContext } from "../utilities/globalContext";

const weatherAPIkey = "c23436de48204e978b245925210311";

export default function SearchBar() {
  const formValue = useRef();

  return (
    <header className="w-full">
      <PositionContext.Consumer>
        {({ setPosition }) => (
          <WeatherContext.Consumer>
            {({ setWeather }) => (
              <form
                onSubmit={(event: FormEvent) => {
                  event.preventDefault();
                  fetch(
                    `https://api.weatherapi.com/v1/forecast.json?key=${weatherAPIkey}&q=${formValue.current.value}&days=2&aqi=no&alerts=no`
                  )
                    .then((response) => response.json())
                    .then((data) => {
                      setPosition({
                        lat: data.location.lat,
                        lon: data.location.lon,
                      });
                      setWeather(data);
                    })
                    .catch((err) => console.error(err));
                }}
                className="w-full p-4 bg-gray-800 shadow-md flex items-center text-white"
              >
                <input
                  type="text"
                  placeholder="Search Location"
                  ref={formValue}
                  className="w-full px-6 bg-gray-800 focus:outline-none"
                />
                <input
                  type="submit"
                  value="Search"
                  className="rounded-full w-28 h-12 bg-blue-500 active:bg-blue-300 focus:outline-none"
                />
              </form>
            )}
          </WeatherContext.Consumer>
        )}
      </PositionContext.Consumer>
    </header>
  );
}
