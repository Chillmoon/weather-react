import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState(null);
  let [temperature, setTemperature] = useState(null);
  let [humidity, setHumidity] = useState(null);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;

  function showWeather(response) {
    setTemperature(Math.round(response.data.main.temp));
    setHumidity(response.data.main.humidity);
  }

  function showTemperature(event) {
    event.preventDefault();
    axios.get(url).then(showWeather);
  }
  function changeCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Weather">
      <div className="SearchForm">
        <form className="Form row" onSubmit={showTemperature}>
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter the city"
              className="textInput form-control"
              onChange={changeCity}
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="searchInput" />
          </div>
        </form>
      </div>

      <div className="cityInfo">
        <h1>{city}</h1>
        <ul>
          <li>Tuesday 18:15</li>
          <li>Cloudy</li>
        </ul>
        <div className="row weatherInfo">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="cloudy"
            />
            <span className="temperature">{temperature}</span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {humidity}%</li>
              <li>Wind: 10 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
