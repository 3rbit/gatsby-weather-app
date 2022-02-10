import { weatherAPIkey } from "./defaults";
import { Position, Weather } from "./types";

export function forecastNameQuery(name: string): [Position, Weather] {
  let position: Position, weather: Weather

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
      console.log(data);
      
    })
    .catch((err) => console.error(err));
    
  return [position, weather]
}