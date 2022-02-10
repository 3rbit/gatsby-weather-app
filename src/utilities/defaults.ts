export const weatherAPIkey = "c23436de48204e978b245925210311";
export const defaultPosition = {
  lat: null,
  lon: null,
};
export const defaultWeather = {
  location: {
    "name": "",
    "region": "",
    "country": "",
    "lat": null,
    "lon": null,
    "tz_id": "",
    "localtime_epoch": null,
    "localtime": ""
  },
  current: {
    "last_updated_epoch": null,
    "last_updated": "",
    "temp_c": null,
    "temp_f": null,
    "feelslike_c": null,
    "feelslike_f": null,
    "condition": {
      "text": "",
      "icon": "",
      "code": null
    },
    "wind_mph": null,
    "wind_kph": null,
    "wind_degree": null,
    "wind_dir": "",
    "pressure_mb": null,
    "pressure_in": null,
    "precip_mm": null,
    "precip_in": null,
    "humidity": null,
    "cloud": null,
    "is_day": null,
    "vis_km": null,
    "vis_miles": null,
    "uv": null,
    "gust_mph": null,
    "gust_kph": null
  },
  forecast: {
    "forecastday": [
      {
        "date": "",
        "date_epoch": null,
        "day": {
          "maxtemp_c": null,
          "maxtemp_f": null,
          "mintemp_c": null,
          "mintemp_f": null,
          "avgtemp_c": null,
          "avgtemp_f": null,
          "maxwind_mph": null,
          "maxwind_kph": null,
          "totalprecip_mm": null,
          "totalprecip_in": null,
          "avgvis_km": null,
          "avgvis_miles": null,
          "avghumidity": null,
          "daily_will_it_rain": null,
          "daily_chance_of_rain": null,
          "daily_will_it_snow": null,
          "daily_chance_of_snow": null,
          "condition": {
            "text": "",
            "icon": "",
            "code": null
          },
          "uv": null
        },
        "astro": {
          "sunrise": "",
          "sunset": "",
          "moonrise": "",
          "moonset": "",
          "moon_phase": "",
          "moon_illumination": null
        },
        "hour": [
          {
            "time_epoch": null,
            "time": "",
            "temp_c": null,
            "temp_f": null,
            "condition": {
              "text": "",
              "icon": "",
              "code": null
            },
            "wind_mph": null,
            "wind_kph": null,
            "wind_degree": null,
            "wind_dir": "",
            "pressure_mb": null,
            "pressure_in": null,
            "precip_mm": null,
            "precip_in": null,
            "humidity": null,
            "cloud": null,
            "feelslike_c": null,
            "feelslike_f": null,
            "windchill_c": null,
            "windchill_f": null,
            "heatindex_c": null,
            "heatindex_f": null,
            "dewpoint_c": null,
            "dewpoint_f": null,
            "will_it_rain": null,
            "chance_of_rain": null,
            "will_it_snow": null,
            "chance_of_snow": null,
            "is_day": null,
            "vis_km": null,
            "vis_miles": null,
            "gust_mph": null,
            "gust_kph": null,
            "uv": null
          },
        ]
      },
    ]
  }
};