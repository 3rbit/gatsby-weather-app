import { useState, useEffect } from "react";

export const usePosition = () => {
    const [position, setPosition] = useState({
      lat: -37.814,
      lng: 144.96332,
    });
  
    useEffect(() => {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          setPosition({ lat: coords.latitude, lng: coords.longitude });
        },
        (blocked) => {
          if (blocked) {
            fetch("https://ipapi.co/json")
              .then((res) => res.json())
              .then((data) =>
                setPosition({ lat: data.latitude, lng: data.longitude })
              )
              .catch((err) => console.error(err));
          }
        }
      );
    }, []);
  
    return {position, setPosition};
  }