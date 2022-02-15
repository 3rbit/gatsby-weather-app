import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FormEvent, useCallback } from "react";
import { forecastNameQuery } from "../../utilities/queries";
import { Position, SearchLocation, Weather } from "../../utilities/types";

export default function List({ className, locations, setPosition, setWeather }: {
  className: string
  locations: SearchLocation[]
  setPosition: React.Dispatch<React.SetStateAction<Position>>
  setWeather: React.Dispatch<React.SetStateAction<Weather>>
}): JSX.Element {

  const handleItemSelect = useCallback(async (event: FormEvent, location: SearchLocation) => {
    event.preventDefault()    
    const [newPosition, newWeather] = await forecastNameQuery(location.name)
    setPosition(newPosition)
    setWeather(newWeather)
  }, [])

  return (
    <ul className={`${className} flex flex-col gap-5 overflow-y-auto`}>
      {locations.length > 0 &&
        locations.map((location) => {
          return <ListItem location={location} handleItemSelect={handleItemSelect} />
        })
      }
    </ul>
  )
}

function ListItem({ location, handleItemSelect }: {
  location: SearchLocation
  handleItemSelect: (event: FormEvent, location: SearchLocation) => any
}) {
  return (
    <li
      key={location.id}
      className="flex justify-between items-center text-center"
      onClick={(event) => handleItemSelect(event, location)}
    >
      <FontAwesomeIcon icon={faLocationDot} className="" />
      <p>{location.name}</p>
      <p>{location.region}</p>
      <p>{location.country}</p>
    </li >
  )
}
