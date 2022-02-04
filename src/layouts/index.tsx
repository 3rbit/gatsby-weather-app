import {
  faMagnifyingGlass,
  faSatelliteDish,
  faTemperatureHalf,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import React from "react";
import ContextProvider from "../utilities/globalContext";

export default function Layout({ children }) {
  return (
    <ContextProvider>
      <div className="overflow-hidden">
        {children}

        <footer className="w-[calc(100%-2*theme(spacing.5))] py-5 m-5 rounded-3xl bg-gray-800 text-white fixed bottom-0 flex justify-evenly">
          <Link to="/">
            <FontAwesomeIcon icon={faTemperatureHalf} className="scale-150" />
          </Link>
          <Link to="/search">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="scale-150" />
          </Link>
          <Link to="/radar">
            <FontAwesomeIcon icon={faSatelliteDish} className="scale-150" />
          </Link>
        </footer>
      </div>
    </ContextProvider>
  );
}
