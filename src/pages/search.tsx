import React, { useEffect, useRef, useState } from "react";
import SearchBar from "../components/searchBar";
import { weatherAPIkey } from "../utilities/defaults";

export default function Search() {
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    console.log(searchResults)
  }, [searchResults])

  function typingOnChange() {
    fetch(
      `https://api.weatherapi.com/v1/search.json?key=${weatherAPIkey}&q=${tyingRef.current.value}`
    )
      .then((response) => response.json())
      .then((data) => { console.log(data) })
      .catch((err) => console.error(err));
  }

  return (
    <div className="flex flex-col p-5 h-[85vh] gap-5">
      <SearchBar className="flex-none" setSearchResults={setSearchResults} />
      <div className="bubble p-5 flex-grow"></div>
    </div>
  );
}
