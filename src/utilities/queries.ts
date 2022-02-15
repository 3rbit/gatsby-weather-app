import { weatherAPIkey } from "./defaults";
import { Position, Weather } from "./types";

// export function forecastNameQuery(name: string): [Position, Weather] {
//   let position: Position, weather: Weather

//   fetch(
//     `https://api.weatherapi.com/v1/forecast.json?key=${weatherAPIkey}&q=${name}&days=2&aqi=no&alerts=no`
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       position = {
//         lat: data.location.lat,
//         lon: data.location.lon,
//       };
//       weather = data;
//       console.log(data);

//     })
//     .catch((err) => console.error(err));

//   return [position, weather]
// }

export async function forecastNameQuery(name: string): Promise<[Position: Position, Weather: Weather]> {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${weatherAPIkey}&q=${name}&days=2&aqi=no&alerts=no`
  )

  if (!response.ok)
    console.error(response.statusText)

  let data: Weather = await response.json();
  
  const position: Position = {
    lat: data.location.lat,
    lon: data.location.lon,
  };
  const weather: Weather = data;  
  return [position, weather];
}

export async function forecastPositionQuery(position: Position): Promise<Weather> {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${weatherAPIkey}&q=${position.lat},${position.lon}&days=2&aqi=no&alerts=no`
  )

  if (!response.ok)
    console.error(response.statusText)

  return await response.json()
}

export async function positionFromIP(): Promise<Position> {
  const response = await fetch("https://ipapi.co/json")

  if (!response.ok) 
    console.error(response.statusText)

  let data = await response.json()
  return { lat: data.latitude, lon: data.longitude }
}