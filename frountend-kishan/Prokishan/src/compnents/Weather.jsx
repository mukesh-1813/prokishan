import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Weather.css';

const Weather = () => {
  const [city, setCity] = useState('London');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // IMPORTANT: Add your OpenWeatherMap API key here
  const apiKey = 'be017055dce2fa3a07f1a6531886d610';

  useEffect(() => {
    const fetchWeatherData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        setWeatherData(response.data);
      } catch (err) {
        setError('City not found.');
        setWeatherData(null);
      }
      setLoading(false);
    };

    if (apiKey && apiKey !== 'YOUR_API_KEY_HERE') {
      fetchWeatherData();
    } else {
      setError('Please add your OpenWeatherMap API key.');
      setLoading(false);
    }
  }, [city, apiKey]);

  const handleSearch = (e) => {
    e.preventDefault();
    const newCity = e.target.elements.city.value;
    if (newCity) {
      setCity(newCity);
    }
  };

  return (
    <div className="weather-container">
      <div className="weather-card">
        <h1 className="weather-title">Weather</h1>
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            name="city"
            placeholder="Enter city name"
            className="search-bar"
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>

        {loading && <p>Loading...</p>}
        {error && <p className="error-message">{error}</p>}

        {weatherData && (
          <div className="weather-info">
            <h2>{weatherData.name}</h2>
            <div className="weather-condition">
              {weatherData.weather[0].main}
            </div>
            <div className="temperature">{Math.round(weatherData.main.temp)}°C</div>
            <div className="details">
              <p>Humidity: {weatherData.main.humidity}%</p>
              <p>Wind Speed: {weatherData.wind.speed} m/s</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
