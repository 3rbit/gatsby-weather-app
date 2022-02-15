import { faLocationDot, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navigate } from "gatsby";
import React, { FormEvent, useRef } from "react";
import { forecastNameQuery, searchLocationNameQuery } from "../../utilities/queries";
import { Position, SearchLocation, Weather } from "../../utilities/types";

export default function SearchBar({ className, setSearchResults, setWeather, setPosition }: {
  className: string
  setSearchResults: React.Dispatch<React.SetStateAction<SearchLocation[]>>
  setWeather: React.Dispatch<React.SetStateAction<Weather>>
  setPosition: React.Dispatch<React.SetStateAction<Position>>
}) {
  const searchRef = useRef(null)

  async function handleFormSubmit(event: FormEvent) {
    event.preventDefault()
    navigate('/')
    const [newPosition, newWeather] = await forecastNameQuery(searchRef.current.value)
    setPosition(newPosition)
    setWeather(newWeather)
  }

  async function handleInputChange() {
    setSearchResults(await searchLocationNameQuery(searchRef.current.value))
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      className={`${className} flex p-5 justify-between`}
    >
      <input
        type="text"
        placeholder="Search Location"
        ref={searchRef}
        onChange={handleInputChange}
        className="bg-transparent focus:outline-none w-full"
        autoFocus
      />
      <button
        type="submit"
        className="font-bold rounded-full px-4 py-3 dark:bg-neutral-700 active:bg-zinc-600"
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
}
