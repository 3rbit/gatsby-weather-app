import { faBackwardStep, faForwardStep, faPause, faPlay, faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import { TileLayer } from "react-leaflet";
import { WeatherMapsContext } from "../../utilities/globalContext";

export function RadarTileLayer(): JSX.Element {
  const  [weatherMaps, setWeatherMaps] = useState(null);
  const radarRef = useRef(null);
  const [index, setIndex] = useState(0) // index of displayed past weatherMap

  // Set weather maps
  useLayoutEffect(() => {
    // Reference: https://devtrium.com/posts/async-functions-useeffect
    const fetchData = async () => {         // declare the async data fetching function
      const response = await fetch(         // get the data from the api
        "https://api.rainviewer.com/public/weather-maps.json"
      )  
      const data = await response.json()    // convert the data to json
      setWeatherMaps(data)                  // set state with the result
    }

    fetchData()                             // call the function
      .catch(console.error)                 // make sure to catch any error
  }, [])

  if (weatherMaps)
    return <>
      <TileLayer
        url={`https://tilecache.rainviewer.com/${weatherMaps.radar.past[index].path}/256/{z}/{x}/{y}/1/1_1.png`}
        opacity={0.8}
        ref={radarRef}
      />
      <RadarDisplay
        pastMaps={weatherMaps.radar.past}
        index={index}
      />
      <RadarControl
        weatherMaps={weatherMaps}
        radarRef={radarRef}
        index={index}
        setIndex={setIndex}
      />
    </>
  return null;
}

function RadarControl({ weatherMaps, radarRef, index, setIndex }) {
  const [pause, setPause] = useState(true) // loop is pause if true

  const past = weatherMaps.radar.past;
  const withinArray = 0 <= index && index < past.length - 1

  function updateUrl() {
    radarRef.current.setUrl(`${weatherMaps.host}/${past[index].path}/256/{z}/{x}/{y}/1/1_1.png`)
  }

  useEffect(() => { // called everytime index or pause is changed
    async function incrementLoop(delay: number) { // One iteration of radar loop
      await new Promise(r => setTimeout(r, delay))
      setIndex(index + 1)
      updateUrl()
    }

    if (!pause && withinArray)
      incrementLoop(2000).catch(console.error) // execute iteration and catch any errors
    else
      setPause(true)
  }, [index, pause])

  function handleBackwardStep() {
    if (withinArray) {
      setPause(true)
      setIndex(index - 1)
      updateUrl()
    }
  }
  function handleForwardStep() {
    if (withinArray) {
      setPause(true)
      setIndex(index + 1)
      updateUrl()
    }
  }
  function handlePauseReplay() {
    if (withinArray)
      setPause(!pause)
    else {
      setIndex(0)
      updateUrl()
    }
  }

  return <div className="bubble fixed bottom-[84px] right-0 m-5 z-[1000] flex text-white ">
    <button className="p-5 pr-2.5" onClick={handleBackwardStep}>
      <FontAwesomeIcon icon={faBackwardStep} className="scale-110" />
    </button>
    <button className="py-5 px-2.5 aspect-square" onClick={handlePauseReplay}>
      <FontAwesomeIcon
        icon={(!withinArray) ? faRotateLeft : ((pause) ? faPlay : faPause)}
        className="scale-110"
      />
    </button>
    <button className="p-5 pl-2.5" onClick={handleForwardStep}>
      <FontAwesomeIcon icon={faForwardStep} className="scale-110" />
    </button>
  </div>;
}

function RadarDisplay({ pastMaps, index }) {
  const datetime = new Date(pastMaps[index].time * 1000)
  const timeString = datetime.toLocaleTimeString('en', { hour: 'numeric', minute: 'numeric' })

  return (
    <div className="bubble fixed bottom-[84px] m-5 z-[1000] text-white text-center font-mono font-bold p-3">
      <p>{timeString} | {index + 1}/{pastMaps.length}</p>
    </div>
  )
}