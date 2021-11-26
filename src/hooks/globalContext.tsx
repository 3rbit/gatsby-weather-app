/* Reference: https://www.w3schools.com/react/react_usecontext.asp */
import React, { createContext, useEffect, useState } from "react";

const weatherAPIkey = "c23436de48204e978b245925210311";
const defaultLocation = {
  name: "London",
  region: "City of London, Greater London",
  country: "United Kingdom",
  lat: 51.52,
  lon: -0.11,
  tz_id: "Europe/London",
  localtime_epoch: 1637902832,
  localtime: "2021-11-26 5:00",
};

export const LocationContext = createContext(null);
export const WeatherContext = createContext(null);
export const ForecastContext = createContext(null);

export default function ContextProvider({ children }) {
  const [location, setLocation] = useState(defaultLocation);
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    let lat = -37.814,
      lon = 144.96332;

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

    let locationCopy = { ...location };

    fetch(
      "https://api.weatherapi.com/v1/forecast.json?key=" +
        weatherAPIkey +
        "&q=" +
        lat +
        "," +
        lon +
        "&days=2&aqi=no&alerts=no"
    )
      .then((response) => response.json())
      .then((data) => {
        locationCopy = data.location;
        setWeather(data.current);
        setForecast(data.forecast);
      })
      .catch((err) => console.error(err));

    [locationCopy.lat, locationCopy.lon] = [lat, lon];
    setLocation(locationCopy);
  }, []);

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      <WeatherContext.Provider value={{ weather, setWeather }}>
        <ForecastContext.Provider value={{ forecast, setForecast }}>
          {children}
        </ForecastContext.Provider>
      </WeatherContext.Provider>
    </LocationContext.Provider>
  );
}
