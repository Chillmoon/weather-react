import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function showWeather(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      city: "Smila",
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
    });
  }

  function search() {
    const apiKey = "3a94f3778290bfeee61278505dbbe51d";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=Smila&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeather);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="SearchForm">
          <form className="Form row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter the city"
                className="textInput form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="searchInput" />
            </div>
          </form>
        </div>
        <div className="cityInfo">
          <h1>{weatherData.city}</h1>
          <ul>
            <li>Tuesday 18:15</li>
            <li>{weatherData.description}</li>
          </ul>
          <div className="row weatherInfo">
            <div className="col-6">
              <img src={weatherData.icon} alt="cloudy" />
              <span className="temperature">{weatherData.temperature}</span>
              <span className="unit">°C</span>
            </div>
            <div className="col-6">
              <ul>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {Math.round(weatherData.wind)} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return <h1>Loading...</h1>;
  }
}
