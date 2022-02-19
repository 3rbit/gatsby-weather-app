import { Link } from "gatsby";
import React, { useContext } from "react";
import { WeatherContext } from "../../utilities/globalContext";

export function LocationTime({ className }: { className: string }) {
  const { weather } = useContext(WeatherContext);
  let date = new Date(weather.current.last_updated);

  return (
    <Link to='/search' className={`${className} grid p-5 grid-cols-2`}>
      <p className="col-start-1 row-start-1 font-bold text-3xl justify-self-start self-end">
        {weather.location.name}
      </p>
      <p className="col-start-1 row-start-2 font-bold italic text-lg justify-self-start self-start">
        {weather.location.region}
      </p>
      <p className="col-start-2 row-start-1 font-bold italic text-lg justify-self-end self-end">
        {date.toLocaleTimeString('en', { hour: 'numeric', minute: 'numeric' })}
      </p>
      <p className="col-start-2 row-start-2 font-bold italic text-md justify-self-end self-start">
        {date.toLocaleDateString()}
      </p>
    </Link>
  )
}