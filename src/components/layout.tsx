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

const scale = "scale-150"
const colour = "text-emerald-400"

export default function Layout({ children }) {
  return (
    <ContextProvider>
      <div className="overflow-hidden bg-gradient-to-b dark:from-slate-500 dark:to-slate-700 h-screen">
        {children}

        <footer className="bubble w-[calc(100%-2*theme(spacing.5))] m-5 py-5 bottom-0 fixed flex justify-evenly">
          <Link to="/" className={scale} activeClassName={colour}>
            <FontAwesomeIcon icon={faTemperatureHalf} />
          </Link>
          <Link to="/radar" className={scale} activeClassName={colour}>
            <FontAwesomeIcon icon={faSatelliteDish} />
          </Link>
          <Link to="/search" className={scale} activeClassName={colour}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Link>
          <Link to="/settings" className={scale} activeClassName={colour}>
            <FontAwesomeIcon icon={faGear} />
          </Link>
        </footer>
      </div>
    </ContextProvider>
  );
}
