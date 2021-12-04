import {
  faGear,
  faSatelliteDish,
  faTemperatureHalf,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import React, { useRef, FormEvent, useContext, useState } from "react";
import ContextProvider, {
  LocationContext,
  PositionContext,
  WeatherContext,
} from "../utilities/globalContext";

const weatherAPIkey = "c23436de48204e978b245925210311";

export default function Layout({ children }) {
  const formValue = useRef(null);

  return (
    <ContextProvider>
      <div className="overflow-hidden">
        {children}

        <footer className="w-full py-5 shadow-md bg-gray-800 text-white font-bold fixed bottom-0 flex flex-row text-center justify-center">
          <div className="flex-none w-1/6"></div>
          <div className="flex-1 text-center">
            <Link to="/">
              <FontAwesomeIcon icon={faTemperatureHalf} className="scale-150" />
            </Link>
          </div>
          <div className="flex-1 text-center">
            <Link to="/radar" className="flex-1">
              <FontAwesomeIcon icon={faSatelliteDish} className="scale-150" />
            </Link>
          </div>
          <div className="flex-1 text-center">
            <Link to="/settings" className="flex-1">
              <FontAwesomeIcon icon={faGear} className="scale-150" />
            </Link>
          </div>
          <div className="flex-none w-1/6"></div>
        </footer>
      </div>
    </ContextProvider>
  );
}
