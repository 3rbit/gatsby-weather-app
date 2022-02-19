/* Reference: https://www.w3schools.com/react/react_usecontext.asp */
import React, { createContext, useEffect, useState } from "react";
import { defaultPosition, defaultWeather, weatherAPIkey } from "./defaults";
import { forecastPositionQuery, positionFromIPQuery } from "./queries";
import { Position, Settings, Weather } from "./types";

export const SettingsContext:
  React.Context<{ settings: Settings, setSettings: React.Dispatch<React.SetStateAction<Settings>> }>
  = createContext(null);
export const PositionContext:
  React.Context<{ position: Position, setPosition: React.Dispatch<React.SetStateAction<Position>> }>
  = createContext(null);
export const WeatherContext:
  React.Context<{ weather: Weather, setWeather: React.Dispatch<React.SetStateAction<Weather>> }>
  = createContext(null);

export default function ContextProvider({ children }) {
  const [settings, setSettings]:
    [settings: Settings, setSettings: React.Dispatch<React.SetStateAction<Settings>>]
    = useState(null);
  const [position, setPosition]:
    [position: Position, setPosition: React.Dispatch<React.SetStateAction<Position>>]
    = useState(defaultPosition);
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
    <SettingsContext.Provider value={{ settings, setSettings }}>
      <PositionContext.Provider value={{ position, setPosition }}>
        <WeatherContext.Provider value={{ weather, setWeather }}>
          {children}
        </WeatherContext.Provider>
      </PositionContext.Provider>
    </SettingsContext.Provider>
  );
}
