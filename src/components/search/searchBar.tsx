import React, { FormEvent, useRef } from "react";
import { weatherAPIkey } from "../../utilities/defaults";
import { Position, SearchLocation, Weather } from "../../utilities/types";

export default function SearchBar({ className, setSearchResults, setWeather, setPosition }: {
    className: string
    setSearchResults: React.Dispatch<React.SetStateAction<SearchLocation[]>>
    setWeather: React.Dispatch<React.SetStateAction<Weather>>
    setPosition: React.Dispatch<React.SetStateAction<Position>>
  }) {
  const searchRef = useRef(null)

  function handleFormSubmit(event: FormEvent) {
    event.preventDefault();

    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${weatherAPIkey}&q=${searchRef.current.value}&days=2&aqi=no&alerts=no`
    )
      .then((response) => response.json())
      .then((data) => {
        setPosition({
          lat: data.location.lat,
          lon: data.location.lon,
        });
        setWeather(data);
      })
      .catch((err) => console.error(err));
  }

  function handleInputChange() {
    console.log("searching...")
    fetch(
      `https://api.weatherapi.com/v1/search.json?key=${weatherAPIkey}&q=${searchRef.current.value}`
    )
      .then((response) => response.json())
      .then((data) => { setSearchResults(data) })
      .catch((err) => console.error(err));
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      className={`${className} flex justify-evenly`}
    >
      <input
        type="text"
        placeholder="Search Location"
        ref={searchRef}
        onChange={handleInputChange}
        className="bg-transparent focus:outline-none"
      />
      <input
        type="submit"
        value="Search"
        className="font-bold rounded-3xl px-5 py-3 dark:bg-neutral-700 active:bg-zinc-600"
        id="submit"
      />
    </form>
  );
}
