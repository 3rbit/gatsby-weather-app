import { weatherAPIkey } from "./defaults";
import { Position } from "./types";

export function forecastNameQuery(name: string): [Position, any] {
  let position: Position, weather: any

  fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${weatherAPIkey}&q=${name}&days=2&aqi=no&alerts=no`
  )
    .then((response) => response.json())
    .then((data) => {
      position = {
        lat: data.location.lat,
        lon: data.location.lon,
      };
      weather = data;
    })
    .catch((err) => console.error(err));
    
  return [position, weather]
}