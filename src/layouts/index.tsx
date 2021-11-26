import React, { useRef, FormEvent, useContext } from "react";
import ContextProvider, { LocationContext } from "../hooks/globalContext";

export default function Layout({ children }) {
  const location = useContext(LocationContext);
  const formValue = useRef(null);

  return (
    <ContextProvider>
      <header>
        <LocationContext.Consumer>
          {({ location, setLocation }) => (
            <form
              onSubmit={(event: FormEvent) => {
                event.preventDefault();
                
                let name = formValue.current.value;

                

                setLocation(formValue.current.value);
                console.log("hi there im here");
                console.log(location);
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
          )}
        </LocationContext.Consumer>
        <h1 className="font-bold text-3xl text-center py-5">{location}</h1>
      </header>

      {children}

      <footer className="container py-5 flex justify-evenly">
        <div className="lef">This is a weather app made by Jeremy.</div>
      </footer>
    </ContextProvider>
  );
}
