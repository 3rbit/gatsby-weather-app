import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FormEvent, useRef } from "react";
import { SearchLocation } from "../../utilities/types";

export default function List({ locations }: { locations: SearchLocation[] }) {
  if (locations.length > 0) {
    return (
      locations.map((location) => {
        return <ListItem location={location} />
      })
    )
  }

  return <></>
}

function ListItem({ location }: { location: SearchLocation }) {
  return (
    <li
      key={location.id}
      className="flex justify-between items-center text-center"
      onClick={() => console.log(location.id, 'clicked')}
    >
      <FontAwesomeIcon icon={faLocationDot} className="" />
      <p>{location.name}</p>
      <p>{location.region}</p>
      <p>{location.country}</p>
    </li >
  )
}
