/* Reference: https://www.w3schools.com/react/react_usecontext.asp */
import React, { createContext, useEffect, useState } from "react";
import { defaultPosition, defaultWeather, weatherAPIkey } from "./defaults";
import { forecastPositionQuery, positionFromIPQuery, weatherMapsQuery } from "./queries";
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

  useEffect(() => {
    let callback = async (position: Position) => {
      setPosition(position)
      setWeather(await forecastPositionQuery(position))
    }
    
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => callback({ lat: coords.latitude, lon: coords.longitude }), // Success callback
      async () => callback(await positionFromIPQuery()) // Error callback
    )
  }, []);

  useEffect(() => {
    // Reference: https://devtrium.com/posts/async-functions-useeffect
    const fetchData = async () => {         // declare the async data fetching function
      const response = await fetch(         // get the data from the api
        "https://api.rainviewer.com/public/weather-maps.json"
      )  
      const data = await response.json()    // convert the data to json
      setWeatherMaps(data)                  // set state with the result
    }

    fetchData()                             // call the function
      .catch(console.error)                 // make sure to catch any error
  }, [])

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      <PositionContext.Provider value={{ position, setPosition }}>
        <WeatherContext.Provider value={{ weather, setWeather }}>
          <WeatherMapsContext.Provider value={{ weatherMaps, setWeatherMaps }}>
            {children}
          </WeatherMapsContext.Provider>
        </WeatherContext.Provider>
      </PositionContext.Provider>
    </SettingsContext.Provider>
  );
}
