import { useState } from 'react';
import './App.css'
import Weather from './components/Weather';
import useData from './hooks/useData';


function App() {
  const { result , convert ,isCelsius } = useData();

  return (
    <div className="App" style={ { backgroundImage: `url('/src/images/01d.jpg')`  } }>
      <Weather result={result} convert={convert} isCelsius={isCelsius} /> 
    </div>
  )
}

export default App
