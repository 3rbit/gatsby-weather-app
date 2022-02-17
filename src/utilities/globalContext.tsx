/* Reference: https://www.w3schools.com/react/react_usecontext.asp */
import React, { createContext, useEffect, useState } from "react";
import { defaultPosition, defaultWeather, weatherAPIkey } from "./defaults";
import { forecastPositionQuery, positionFromIPQuery } from "./queries";
import { Location, Position, Weather } from "./types";

export const PositionContext:
  React.Context<{ position: Position, setPosition: React.Dispatch<React.SetStateAction<Position>> }>
  = createContext(null);
export const LocationContext:
  React.Context<{ location: Location, setLocation: React.Dispatch<React.SetStateAction<Location>> }>
  = createContext(null);
export const WeatherContext:
  React.Context<{ weather: Weather, setWeather: React.Dispatch<React.SetStateAction<Weather>> }>
  = createContext(null);

export default function ContextProvider({ children }) {
  const [position, setPosition]:
    [position: Position, setPosition: React.Dispatch<React.SetStateAction<Position>>]
    = useState(defaultPosition);
  const [location, setLocation]:
    [location: Location, setLocation: React.Dispatch<React.SetStateAction<Location>>]
    = useState(null);
  const [weather, setWeather]:
    [weather: Weather, setWeather: React.Dispatch<React.SetStateAction<Weather>>]
    = useState(defaultWeather);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => callback({ lat: coords.latitude, lon: coords.longitude }),
      async () => callback(await positionFromIPQuery())
    );

    let callback = async (position: Position) => {
      setPosition(position)
      setWeather(await forecastPositionQuery(position))
    }
  }, []);

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
