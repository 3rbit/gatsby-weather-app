import React, { useContext, useMemo } from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { WeatherContext } from "../../utilities/globalContext";

export function ForecastGraph({ className }: { className: string }) {
  const forecast = useContext(WeatherContext).weather.forecast
  const forecastData = useMemo(() => {
    try {
      let forecastRemaining = forecast.forecastday[0].hour.slice(new Date().getHours()) // Forecast data for the remainder of the day
      let forecastTomorrow = forecast.forecastday[1].hour.slice(24 - new Date().getHours()) // Forecast for tomorrow
      return forecastRemaining.concat(forecastTomorrow) // Return the forecasts for the next 24 hours from now
    } catch (error) {
      return []
    }
  }, [forecast])

  return (
    <div className={`${className}`}>
      <ResponsiveContainer width="99%" height="99%">
        <AreaChart
          data={forecastData}
          margin={{ top: 20, right: 20, bottom: 0, left: -20, }}
        >
          <defs>
            <linearGradient id="colourTemp" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#71717a" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#71717a" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="time"
            type="category"
            tickFormatter={value => new Date(value).toLocaleTimeString('en', { hour: 'numeric' })}
            tick={{ fontSize: 13 }}
            domain={['12 AM', '11 AM']}
          />
          <YAxis
            dataKey="temp_c"
            type="number"
            domain={[dataMin => Math.floor(dataMin), dataMax => Math.ceil(dataMax)]}
            unit="°C"
            tick={{ fontSize: 13 }}
          />
          <Tooltip content={<CustomTooltip active={undefined} payload={undefined} label={undefined} />} />
          <Area
            dataKey="temp_c"
            type="monotone"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colourTemp)"
            strokeWidth={0.5}
            strokeOpacity={0.5}
          >
          </Area>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    const time = new Date(label);
    return <>
      <p className="text-xl font-bold m-0 p-0">{payload[0].value}°C</p>
      <p className="text-md italic">{time.toLocaleTimeString('en', { hour: 'numeric' })}</p>
    </>
  }
  return null;
}
