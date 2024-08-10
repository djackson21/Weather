
import './App.css';
import { useState } from 'react';

const api = {
  key: process.env.REACT_APP_WEATHER_API_KEY,
  base: 'https://api.openweathermap.org/data/2.5/',
};

function App() {

  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then((res) => res.json())
    .then((result) => {
      setWeather(result);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* Header */}
        <h1>Weather App</h1>

        {/* Search Box */}

        <div>
          <input type='text' 
          placeholder='Enter City/town'
          onChange={(e) => setSearch(e.target.value)}
          />

          <button onClick={searchPressed}>Search</button>
        </div>

        {/* If weather is not undefined */}
        {typeof weather.main !== "undefined" ? (
          <div>
            {/* Location */}
            {weather.name && <p>{weather.name}</p>}
    
            {/* Temp */}
            {weather.main && <p>{weather.main.temp} ºC</p>}
    
            {/* conditon */}
              <p>{weather.weather[0].main}</p>
              <p>{weather.weather[0].description}</p>
          </div>
        ) : (
          ""
        )}
      </header>
    </div>
  );
}

export default App;
