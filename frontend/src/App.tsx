import  { useState } from 'react';
import axios from 'axios';
import './App.css';


function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<any>(null);

  const baseUrl = import.meta.env.VITE_API_BASE;
  const apiKey = import.meta.env.VITE_API_KEY;
  

  const getWeather = async () => {
    try {
      const response = await axios.get(`${baseUrl}/weather?q=${city}&appid=${apiKey}`);
      setWeather(response.data);
    } catch (error) {
      console.error('Error retrieving weather data', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col justify-center items-center text-white">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Weather App</h1>
        <p className="text-xl">Get the current weather for any city</p>
      </header>
      <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg text-center w-80">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-2 rounded mb-4 w-full text-black"
        />
        <button
          onClick={getWeather}
          className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded w-full"
        >
          Get Weather
        </button>
        {weather && (
          <div className="mt-6">
            <h2 className="text-2xl font-bold">{weather.name}</h2>
            <p className="text-lg">{weather.weather[0].description}</p>
            <p className="text-2xl">{Math.round(weather.main.temp - 273.15)}°C</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
