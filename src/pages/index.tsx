import React, { useState, useEffect, useRef } from "react"
import Footer from "../components/footer";
import Main from "../components/main";
import Header from "../components/header";
import Radar from "../components/radar";
import { usePosition } from "../hooks/usePosition";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faLocationDot } from "@fortawesome/free-solid-svg-icons";

// markup
const IndexPage = () => {
  const [location, setLocation] = useState("Melbourne");
  const [weather, setWeather] = useState(null);
  const formValue = useRef(null);

  const position = usePosition();

  useEffect(() => {
    fetch(
      "https://api.weatherapi.com/v1/current.json?key=c23436de48204e978b245925210311&q=" +
      location
    )
      .then((response) => response.json())
      .then((data) => setWeather(data))
      .catch((err) => console.error(err));
  }, [, location]);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log(event);
    console.log(formValue.current.value);

    setLocation(formValue.current.value);
  }

  return (
    <body className="flex flex-col min-h-screen">
      <Header
        location={location}
        handleSubmit={handleSubmit}
        formValue={formValue}
      />

      <i className="fa-solid fa-location-dot"></i>askdfja;sldkjf
      <div>
        <FontAwesomeIcon icon={['fab', 'apple']} />
        <FontAwesomeIcon icon={['fab', 'microsoft']} />
        <FontAwesomeIcon icon={['fab', 'google']} />

        <FontAwesomeIcon icon="check-square" />
        <FontAwesomeIcon icon="coffee" />
        <FontAwesomeIcon icon={['fas', 'coffee']} />
        <FontAwesomeIcon icon={['far', 'coffee']} />
        <FontAwesomeIcon icon={faCoffee} />
        <FontAwesomeIcon icon={faLocationDot} />
        With Coffee Checked, these companies always know their coffee is hot and ready!
      </div>

      <Main weather={weather} />
      <Radar position={position} />
      <Footer />
    </body>
  );
};

export default IndexPage;
