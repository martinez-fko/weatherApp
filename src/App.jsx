import './App.css'
import Weather from './components/Weather';
import useData from './hooks/useData';


function App() {
  const { result , convert ,isCelsius } = useData();
  const img = result.weather?.[0].icon

  return (
    <div className="App" style={ { backgroundImage: `url('https://github.com/martinez-fko/weatherApp/blob/main/public/images/${img}.jpg')`  } }>
      <Weather result={result} convert={convert} isCelsius={isCelsius} /> 
    </div>
  )
}

export default App
