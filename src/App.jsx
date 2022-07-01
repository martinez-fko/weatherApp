import {useState ,useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
   const [weather, setWeather] = useState({});

  const success = (pos) => {
    let lat= pos.coords.latitude;
    let lon= pos.coords.longitude;
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6d4cfbdc462285b5d0df13cc968d41c9`)
      .then(res => setWeather( res.data ) )
  }

  console.log(weather);
  
  useEffect(() => {
    
    navigator.geolocation.getCurrentPosition(success);
    
  }, []);

  return (
    <div className="App">
       <main className="box">
          <h1>Weather App</h1>
          <h2>{weather.name}</h2>

          <article className="time">
            <img src="#" alt="weather" />
            <p>17.97 C</p>
            <p className='title'>clouds</p>
            <p> Wind Speed 5.14 m/s</p>
            <p>Clouds 40%</p>
            <p>Presurs 40 mb</p>
          </article>

          <button>Degrees</button>
       </main>
    </div>
  )
}

export default App
