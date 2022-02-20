import {
  faGear,
  faMagnifyingGlass,
  faSatelliteDish,
  faTemperatureHalf,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import React from "react";
import ContextProvider from "../utilities/globalContext";

const defaultClassName = "scale-150"
const activeClassName = "text-white"

export default function Layout({ children }) {
  return (
    <ContextProvider>
      <div className="overflow-hidden bg-gradient-to-b dark:from-slate-500 dark:to-slate-700 h-screen">
        {children}

        <footer className="bubble w-[calc(100%-2*theme(spacing.5))] m-5 py-5 bottom-0 fixed flex justify-evenly text-zinc-500">
          <Link to="/" className={defaultClassName} activeClassName={activeClassName}>
            <FontAwesomeIcon icon={faTemperatureHalf} />
          </Link>
          <Link to="/radar" className={defaultClassName} activeClassName={activeClassName}>
            <FontAwesomeIcon icon={faSatelliteDish} />
          </Link>
          <Link to="/search" className={defaultClassName} activeClassName={activeClassName}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Link>
          <Link to="/settings" className={defaultClassName} activeClassName={activeClassName}>
            <FontAwesomeIcon icon={faGear} />
          </Link>
        </footer>
      </div>
    </ContextProvider>
  );
}
