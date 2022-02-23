/* Reference: https://www.w3schools.com/react/react_usecontext.asp */
import React, { createContext, useEffect, useLayoutEffect, useState } from "react";
import { forecastPositionQuery, positionFromIPQuery } from "./queries";
import { Position, Settings, Weather, WeatherMaps } from "./types";

export const SettingsContext:
  React.Context<{ settings: Settings, setSettings: React.Dispatch<React.SetStateAction<Settings>> }>
  = createContext(null);
export const PositionContext:
  React.Context<{ position: Position, setPosition: React.Dispatch<React.SetStateAction<Position>> }>
  = createContext(null);
export const WeatherContext:
  React.Context<{ weather: Weather, setWeather: React.Dispatch<React.SetStateAction<Weather>> }>
  = createContext(null);
export const WeatherMapsContext:
  React.Context<{ weatherMaps: WeatherMaps, setWeatherMaps: React.Dispatch<React.SetStateAction<WeatherMaps>> }>
  = createContext(null);

export default function ContextProvider({ children }) {
  const [settings, setSettings]:
    [settings: Settings, setSettings: React.Dispatch<React.SetStateAction<Settings>>]
    = useState(null);
  const [position, setPosition]:
    [position: Position, setPosition: React.Dispatch<React.SetStateAction<Position>>]
    = useState(null);
  const [weather, setWeather]:
    [weather: Weather, setWeather: React.Dispatch<React.SetStateAction<Weather>>]
    = useState(null);
  const [weatherMaps, setWeatherMaps]:
    [weatherMaps: WeatherMaps, setWeatherMaps: React.Dispatch<React.SetStateAction<WeatherMaps>>]
    = useState(null);

    // Set weather and position
  useLayoutEffect(() => {
    let callback = async (position: Position) => {
      setPosition(position)
      setWeather(await forecastPositionQuery(position))
    }
    
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => callback({ lat: coords.latitude, lon: coords.longitude }), // Success callback
      async () => callback(await positionFromIPQuery()) // Error callback
    )
  }, []);



  // Set settings
  // useEffect(() => {
  //   let currentSettings = localStorage.getItem('settings')
  // }, [])

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
