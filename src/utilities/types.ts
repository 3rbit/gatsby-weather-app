export type SearchLocation = {
  id: number
  name: string
  region: string
  country: string
  lat: number
  lon: number
}

export type Location = {
  lat: number
  lon: number
  name: string
  region: string
  country: string
  tz_id: string
  localtime_epoch: number
  localtime: string
}

export type Position = {
  lat: number
  lon: number
};

export type Current = {
  last_updated: string
  last_updated_epoch: number
  temp_c: number
  temp_f: number
  feelslike_c: number
  feelslike_f: number
  condition: {
    text: string
    icon: string
    code: number
  }
  wind_mph: number
  wind_kph: number
  wind_degree: number
  wind_dir: string
  pressure_mb: number
  pressure_in: number
  precip_mm: number
  precip_in: number
  humidity: number
  cloud: number
  is_day: number
  vis_km: number
  vis_miles: number
  uv: number
  gust_mph: number
  gust_kph: number
}

type ForecastDayDay = {
  maxtemp_c: number
  maxtemp_f: number
  mintemp_c: number
  mintemp_f: number
  avgtemp_c: number
  avgtemp_f: number
  maxwind_mph: number
  maxwind_kph: number
  totalprecip_mm: number
  totalprecip_in: number
  avgvis_km: number
  avgvis_miles: number
  avghumidity: number
  daily_will_it_rain: number,
  daily_chance_of_rain: number,
  daily_will_it_snow: number,
  daily_chance_of_snow: number,
  condition: {
    text: string
    icon: string
    code: number
  }
  uv: number
}

type ForecastDayAstro = {
  sunrise: string
  sunset: string
  moonrise: string
  moonset: string
  moon_phase: string
  moon_illumination: number
}

type ForecastDayHour = {
  time_epoch: number
  time: string
  temp_f: number
  temp_c: number
  condition: {
    text: string
    icon: string
    code: number
  }
  wind_mph: number
  wind_kph: number
  wind_degree: number
  wind_dir: string
  pressure_mb: number
  pressure_in: number
  precip_mm: number
  precip_in: number
  humidity: number
  cloud: number
  feelslike_c: number
  feelslike_f: number
  windchill_c: number
  windchill_f: number
  heatindex_c: number
  heatindex_f: number
  dewpoint_c: number
  dewpoint_f: number
  will_it_rain: number
  chance_of_rain: number
  will_it_snow: number
  chance_of_snow: number
  is_day: number
  vis_km: number
  vis_miles: number
  gust_mph: number
  gust_kph: number
  uv: number
}

type ForecastDay = {
  date: string
  date_epoch: number
  day: ForecastDayDay
  astro: ForecastDayAstro
  hour: Array<ForecastDayHour>
}

type Forecast = {
  forecastday: Array<ForecastDay>
}

export type Weather = {
  location: Location
  current: Current
  forecast: Forecast
}

export type WeatherMaps = {
  version: string // API version
  generated: number // seconds since epoch (UTC)
  host: string // Host and protocol for the images
  radar: Radar
  satellite: Satellite
}

type Radar = {
  past: Array<Frame> // Past weather radar frames. 2 hours, with 10-minute steps
  nowcast: Array<Frame> // Future weather radar frames 30 mins
}

type Satellite = {
  infrared: Array<Frame> // Past 2 hours of the infrared statellite data 
  // (channel 13) from the available satellites
}

type Frame = {
  time: number // map frame generation data in seconds since epoch
  path: string // base path for the images of that frame
}