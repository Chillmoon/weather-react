import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Searh(props) {
  let [city, setCity] = useState(null);
  let [message, setMessage] = useState(null);
  let [temperature, setTemperature] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;

  function showWeather(response) {
    setTemperature(response.data.main.temp);
    setHumidity(response.data.main.humidity);
    setMessage(
      `The temperature in ${city} is ${Math.round(
        temperature
      )}°C and the humidity is ${humidity}%. Have a great day!`
    );
  }

  function showTemperature(event) {
    event.preventDefault();
    axios.get(url).then(showWeather);
  }
  function changeCity(event) {
    setCity(event.target.value);
  }
  return (
    <div>
      <form className="Form" onSubmit={showTemperature}>
        <input
          type="text"
          placeholder="Enter the city"
          className="textInput"
          onChange={changeCity}
        />
        <input type="submit" value="Search" className="searchInput" />
      </form>
      {message}
    </div>
  );
}
