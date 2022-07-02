import axios from "axios";
import React, { useState, useEffect } from "react";

const useData = () => {
  const [result, setResult] = useState({});
  const [isCelsius, setIsCelsius] = useState(true);
  const [url, setUrl] = useState();

  const success = (pos) => {
    let lat = pos.coords.latitude;
    let lon = pos.coords.longitude;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6d4cfbdc462285b5d0df13cc968d41c9`;
    setUrl(url);

    axios.get(`${url}&units=metric`).then((res) => setResult(res.data));
  };

  const convert = () => {
    if (isCelsius) {
      setIsCelsius(false);
      axios.get(`${url}&units=imperial`).then((res) => setResult(res.data));
    } else {
      setIsCelsius(true);
      axios.get(`${url}&units=metric`).then((res) => setResult(res.data));
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  return { result, convert , isCelsius };
};

export default useData;
