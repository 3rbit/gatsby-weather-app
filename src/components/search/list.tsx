import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navigate } from "gatsby";
import React, { FormEvent, useCallback } from "react";
import { forecastPositionQuery } from "../../utilities/queries";
import { Position, SearchLocation, Weather } from "../../utilities/types";

export function List({ className, locations, setPosition, setWeather }: {
  className: string
  locations: SearchLocation[]
  setPosition: React.Dispatch<React.SetStateAction<Position>>
  setWeather: React.Dispatch<React.SetStateAction<Weather>>
}): JSX.Element {

  const handleItemSelect = useCallback(async (event: FormEvent, location: SearchLocation) => {
    event.preventDefault()
    navigate('/')
    const newPosition = { lat: location.lat, lon: location.lon }
    const newWeather = await forecastPositionQuery(newPosition)
    setPosition(newPosition)
    setWeather(newWeather)
  }, [])

  return (
    <ul className={`${className} p-5 flex flex-col gap-2.5 overflow-y-auto`}>
      {locations.length > 0 && locations.map((location) => {
        return <ListItem location={location} handleItemSelect={handleItemSelect} />
      })}
    </ul>
  )
}

function ListItem({ location, handleItemSelect }: {
  location: SearchLocation
  handleItemSelect: (event: FormEvent, location: SearchLocation) => any
}) {
  return <>
    <li
      key={location.id}
      className="flex justify-between items-center text-center gap-5"
      onClick={(event) => handleItemSelect(event, location)}
    >
      <FontAwesomeIcon icon={faLocationDot} />
      <p className="">{location.name}</p>
      <p className="">{location.region}
        <p>{location.country}</p>
      </p>
    </li>
    <div className="border-t-[0.1rem] border-dashed border-opacity-50"></div> {/* Divider */}
  </>
}
