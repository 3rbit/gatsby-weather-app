import React, { useState, useEffect, useRef } from "react"
import Footer from "../components/footer";
import Main from "../components/main";
import Header from "../components/header";
import Radar from "../components/radar";
import { usePosition } from "../hooks/usePosition";

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
      <Main weather={weather} />
      <Radar position={position}/>
      <Footer />
    </body>
  );
};

export default IndexPage;
