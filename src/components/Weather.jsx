import React from "react";

const Weather = ({ result, convert, isCelsius }) => {
  console.log(result);
  return (
    <main className="card">
      <h1>Weather App</h1>
      <h2>
        {result?.name} {result?.sys?.country}
      </h2>

      <article className="time">
        <div className="weather">
          <img
            src={`http://openweathermap.org/img/wn/${result.weather?.[0].icon}@2x.png `}
            alt="weather"
          />
          <p className="degrees">
            {result.main?.temp} {isCelsius ? "°C" : "°F"}
          </p>
        </div>
        <div className="weather-info">
          <p className="title">{result.weather?.[0].description}</p>
          <p>
            {" "}
            Wind Speed{" "}
            <span>
              {" "}
              {result.wind?.speed} {isCelsius ? "m/s" : "h/s"}{" "}
            </span>
          </p>
          <p>
            Clouds <span> {result.clouds?.all}% </span>
          </p>
          <p>
            Pressure <span>{result.main?.pressure} mb </span>
          </p>
        </div>
      </article>
      <button onClick={convert}>Degrees {isCelsius ? "°F" : "°C"} </button>
    </main>
  );
};

export default Weather;
