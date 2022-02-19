import { weatherAPIkey } from "./defaults";
import { Position, SearchLocation, Weather, WeatherMaps } from "./types";

export async function forecastNameQuery(name: string): Promise<[Position: Position, Weather: Weather]> {
  const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${weatherAPIkey}&q=${name}&days=2&aqi=no&alerts=no`)
  if (!response.ok) console.error(response.statusText)
  const weather: Weather = await response.json();
  const position: Position = { lat: weather.location.lat, lon: weather.location.lon }
  return [position, weather]
}

export async function forecastPositionQuery(position: Position): Promise<Weather> {
  const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${weatherAPIkey}&q=${position.lat},${position.lon}&days=2&aqi=no&alerts=no`)
  if (!response.ok) console.error(response.statusText)
  return await response.json()
}

export async function positionFromIPQuery(): Promise<Position> {
  const response = await fetch("https://ipapi.co/json")
  if (!response.ok) console.error(response.statusText)
  const data = await response.json()
  return { lat: data.latitude, lon: data.longitude }
}

export async function searchLocationNameQuery(name: string): Promise<[SearchLocation]> {
  const response = await fetch(`https://api.weatherapi.com/v1/search.json?key=${weatherAPIkey}&q=${name}`)
  if (!response.ok) console.error(response.statusText)
  return await response.json()
}