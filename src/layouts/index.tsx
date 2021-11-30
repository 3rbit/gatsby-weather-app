import {
  faGear,
  faSatelliteDish,
  faTemperatureHalf,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

      <div className="w-full py-4 rounded-t-xl bg-gray-700 text-white font-bold fixed bottom-0 left-1/2 -translate-x-2/4 flex items-center justify-center">
        <FontAwesomeIcon
          icon={faTemperatureHalf}
          className="flex-1 h-8"
          onClick={() => {
            console.log("hi world");
          }}
        />
        <FontAwesomeIcon
          icon={faSatelliteDish}
          className="flex-1 h-8"
          onClick={() => {
            console.log("hi world");
          }}
        />
        <FontAwesomeIcon
          icon={faGear}
          className="flex-1 h-8"
          onClick={() => {
            console.log("hi world");
          }}
        />
      </div>
      <footer className="container py-5 flex justify-evenly">
        <div className="lef">This is a weather app made by Jeremy.</div>
      </footer>
    </ContextProvider>
  );
}
