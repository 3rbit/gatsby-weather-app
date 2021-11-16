import { useState, useEffect } from "react";

export const usePosition = () => {
    const [position, setPosition] = useState({
      lat: 47.21725,
      lng: -1.55336,
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
  
    return { position };
  }