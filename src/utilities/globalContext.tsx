/* Reference: https://www.w3schools.com/react/react_usecontext.asp */
import React, { createContext, useEffect, useState } from "react";
import { weatherAPIkey, defaultPosition, defaultWeather } from "./defaults";
import { Location, Position } from "./types";

export const PositionContext:
  React.Context<{ position: Position, setPosition: React.Dispatch<React.SetStateAction<Position>> }>
  = createContext(null);
export const LocationContext:
  React.Context<{ location: Location, setLocation: React.Dispatch<React.SetStateAction<Location>> }>
  = createContext(null);
export const WeatherContext = createContext({
  weather: defaultWeather,
  setWeather: null,
});

export default function ContextProvider({ children }) {
  const [position, setPosition]:
    [position: Position, setPosition: React.Dispatch<React.SetStateAction<Position>>]
    = useState(defaultPosition);
  const [location, setLocation]:
    [location: Location, setLocation: React.Dispatch<React.SetStateAction<Location>>]
    = useState(null);
  const [weather, setWeather] = useState(defaultWeather);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) =>
        setPosition({ lat: coords.latitude, lon: coords.longitude }),
      (blocked) => {
        if (blocked) {
          fetch("https://ipapi.co/json")
            .then((res) => res.json())
            .then((data) =>
              setPosition({ lat: data.latitude, lon: data.longitude })
            )
            .catch((err) => console.error(err));
        }
      }
    );
  }, []);

  // Called everytime a position is changed
  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${weatherAPIkey}&q=${position.lat},${position.lon}&days=2&aqi=no&alerts=no`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
      })
      .catch((err) => console.error(err));
  }, [position]);

  return (
    <PositionContext.Provider value={{ position, setPosition }}>
      <LocationContext.Provider value={{ location, setLocation }}>
        <WeatherContext.Provider value={{ weather, setWeather }}>
          {children}
        </WeatherContext.Provider>
      </LocationContext.Provider>
    </PositionContext.Provider>
  );
}
