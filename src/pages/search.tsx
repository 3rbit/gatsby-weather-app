import React, { useState } from "react";
import { SearchBar, List } from "../components/search";
import { PositionContext, WeatherContext } from "../utilities/globalContext";
import { SearchLocation } from "../utilities/types";

export default function Search() {
  const [searchResults, setSearchResults]:
    [searchResults: SearchLocation[], setSearchResults: React.Dispatch<React.SetStateAction<SearchLocation[]>>]
    = useState([])

  return (
    <PositionContext.Consumer>
      {({ setPosition }) => (
        <WeatherContext.Consumer>
          {({ setWeather }) => (
            <div className="flex flex-col p-5 h-[85vh] gap-5">
              <SearchBar
                className="flex-none bubble"
                setSearchResults={setSearchResults}
                setWeather={setWeather}
                setPosition={setPosition} />
              <List
                className="flex-grow bubble"
                locations={searchResults}
                setWeather={setWeather}
                setPosition={setPosition} />
            </div>
          )}
        </WeatherContext.Consumer>
      )}
    </PositionContext.Consumer>
  );
}
