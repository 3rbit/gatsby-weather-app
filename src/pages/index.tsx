import * as React from "react";
import Footer from "./_footer";
import Main from "./_main";
import Header from "./_header";

// markup
const IndexPage = () => {
  const [location, setLocation] = React.useState("Melbourne");
  const [weather, setWeather] = React.useState(null);
  const formValue = React.useRef(null);

  React.useEffect(() => {
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
      <Footer />
    </body>
  );
};

export default IndexPage;
