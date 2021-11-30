/* Reference: https://www.w3schools.com/react/react_usecontext.asp */
import React, { createContext, useEffect, useState } from "react";

const weatherAPIkey = "c23436de48204e978b245925210311";
const defaultPosition = {
  lat: -37.814,
  lon: 144.96332,
};

export const PositionContext = createContext(null);
export const LocationContext = createContext(null);
export const WeatherContext = createContext(null);

export default function ContextProvider({ children }) {
  const [position, setPosition] = useState(defaultPosition);
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    let lat = -37.814,
      lon = 144.96332; // Default position = melbourne

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        lat = coords.latitude;
        lon = coords.longitude;
      },
      (blocked) => {
        if (blocked) {
          fetch("https://ipapi.co/json")
            .then((res) => res.json())
            .then((data) => {
              lat = data.latitude;
              lon = data.longitude;
            })
            .catch((err) => console.error(err));
        }
      }
    );

    setPosition({ lat, lon });
  }, []);

  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${weatherAPIkey}&q=${position.lat},${position.lon}&days=2&aqi=no&alerts=no`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
      })
      .catch((err) => console.error(err));
  }, [, position]);

  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${weatherAPIkey}&q=${location}&days=2&aqi=no&alerts=no`
    )
      .then((response) => response.json())
      .then((data) => {
        setPosition({ lat: data.location.lat, lon: data.location.lon });
        setWeather(data);
      })
      .catch((err) => console.error(err));
  }, [location]);

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