import {
  faGear,
  faSatelliteDish,
  faTemperatureHalf,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import React, { useRef, FormEvent, useContext } from "react";
import ContextProvider, { LocationContext } from "../utilities/globalContext";

export default function Layout({ children }) {
  const formValue = useRef(null);

  return (
    <ContextProvider>
      <LocationContext.Consumer>
        {({ location, setLocation }) => (
          <header>
            <form
              onSubmit={(event: FormEvent) => {
                event.preventDefault();
                setLocation(formValue.current.value);
              }}
              className="container mx-auto my-1.5 rounded-full shadow-md p-5 flex items-center"
            >
              <input
                type="text"
                placeholder="Search Location"
                ref={formValue}
                className="w-full px-6 leading-tight focus:outline-none"
              />
              <input
                type="submit"
                value="Search"
                className="rounded-full w-28 h-12 p-2 bg-blue-500 active:bg-blue-300 focus:outline-none"
              />
            </form>
          </header>
        )}
      </LocationContext.Consumer>

      {children}

      <footer className="w-full py-4 rounded-t-xl shadow-2xl bg-gray-800 text-white font-bold fixed bottom-0 left-1/2 -translate-x-2/4 flex flex-row text-center justify-center">
        <div className="flex-1 text-center">
          <Link to="/">
            <FontAwesomeIcon
              icon={faTemperatureHalf}
              className="h-8"
              onClick={() => {
                console.log("you clicked the weather button");
              }}
            />
          </Link>
        </div>
        <div className="flex-1 text-center">
          <Link to="/radar" className="flex-1">
            <FontAwesomeIcon
              icon={faSatelliteDish}
              className="h-8"
              onClick={() => {
                console.log("you clicked the radar button");
              }}
            />
          </Link>
        </div>
        <div className="flex-1 text-center">
          <Link to="/settings" className="flex-1">
            <FontAwesomeIcon
              icon={faGear}
              className="h-8"
              onClick={() => {
                console.log("you clicked the settings button");
              }}
            />
          </Link>
        </div>
      </footer>
    </ContextProvider>
  );
}
