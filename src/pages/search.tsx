import React, { useEffect, useRef, useState } from "react";
import List from "../components/search/list";
import SearchBar from "../components/search/searchBar";
import { SearchLocation } from "../utilities/types";

export default function Search() {
  const [searchResults, setSearchResults]:
    [searchResults: SearchLocation[], setSearchResults: React.Dispatch<React.SetStateAction<SearchLocation[]>>]
    = useState([])

  return (
    <div className="flex flex-col p-5 h-[85vh] gap-5">
      <SearchBar className="flex-none" setSearchResults={setSearchResults} />
      <ul className="bubble p-5 flex-grow flex flex-col gap-5 overflow-y-auto">
        <List locations={searchResults} />
      </ul>

    </div>
  );
}
