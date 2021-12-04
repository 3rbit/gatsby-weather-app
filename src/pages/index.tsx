import React, { useContext } from "react";
import SearchBar from "../components/searchBar";
import { WeatherContext } from "../utilities/globalContext";

export default function Index(props: any) {
  const { weather } = useContext(WeatherContext);

  console.log(weather);
  return (
    <>
      <SearchBar />
      <h1 className="pt-4 font-bold text-center text-3xl">
        {`${weather.location.name}, ${weather.location.region}, ${weather.location.country}`}
      </h1>
      <pre className="container p-5">
        {JSON.stringify(weather.current, undefined, 2)}
      </pre>
    </>
  );
}
