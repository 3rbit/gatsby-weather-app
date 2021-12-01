import { Link } from "gatsby";
import React, { useContext } from "react";
import { WeatherContext } from "../utilities/globalContext";

export default function Index(props: any) {
  const { weather } = useContext(WeatherContext);

  console.log(weather)
  return (
    <>
      <h1 className="pt-4 font-bold text-center text-3xl">
        {`${weather.location.name}, ${weather.location.region}, ${weather.location.country}`}
      </h1>
      <pre className="w-14 text-center p-5">
        {JSON.stringify(weather, undefined, 2)}
        hi this is a test
      </pre>
      <Link to="/radar" className="box-border">
        Link to radar
      </Link>
    </>
  );
}
