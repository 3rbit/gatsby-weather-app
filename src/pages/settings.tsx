import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import React, { useContext } from "react";
import { SettingsContext } from "../utilities/globalContext";

export default function Settings() {
  const { settings } = useContext(SettingsContext)
  if (settings)
    return (
      <SettingsContext.Consumer>
        {({ setSettings }) => (
          <div className="h-[85vh] p-5">
            <div className="bubble p-5 font-bold flex flex-col gap-5">

              <Link to="/settings" className="flex items-center justify-between pb-2">
                <p>About</p>
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>

              <div className="flex items-center justify-between">
                <p>Degrees</p>
                <div>
                  <button
                    className="rounded-l-3xl px-3 py-2 border-r-[1px] border-gray-600 bg-neutral-700 active:bg-zinc-600"
                  >
                    °C
                  </button>
                  <button
                    className="rounded-r-3xl px-3 py-2 border-l-[1px] border-gray-600 bg-neutral-700 active:bg-zinc-600"
                  >
                    °F
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <p>Speed</p>
                <div>
                  <button
                    className="rounded-l-3xl px-3 py-2 border-r-[1px] border-gray-600 bg-neutral-700 active:bg-zinc-600"
                  >
                    km/h
                  </button>
                  <button
                    className="rounded-r-3xl px-3 py-2 border-l-[1px] border-gray-600 bg-neutral-700 active:bg-zinc-600"
                  >
                    mph
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}
      </SettingsContext.Consumer>
    )
  return null
}