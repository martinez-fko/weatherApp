import React from 'react';

const Weather = ({ result , convert , isCelsius}) => {

    return (
        <main className="card">
        <h1>Weather App</h1>
        <h2>{result?.name} {result?.sys?.country}</h2>

        <article className="time">
          <img src={ `http://openweathermap.org/img/wn/${result.weather?.[0].icon}@2x.png `} alt="weather" />
          <p>{result.main?.temp} { isCelsius ? "°C" : "°F" }</p>
          <p className='title'>{result.weather?.[0].description}</p>
          <p> Wind Speed {result.wind?.speed} { isCelsius ? "m/s" : "h/s"} </p>
          <p>Clouds {result.clouds?.all}%</p>
          <p>Pressure {result.main?.pressure} mb</p>
        </article>
        <button onClick={convert}>Degrees { isCelsius ? "°F" : "°C" } </button>
     </main>
    );
};

export default Weather;