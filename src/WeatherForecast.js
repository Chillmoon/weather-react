import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  const apiKey = "3a94f3778290bfeee61278505dbbe51d";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  function handleResponse(response) {
    console.log(response.data);
  }

  axios.get(url).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Mon</div>
          <WeatherIcon code={"01d"} size={50} />
          <div className="Weatherforecast-temperature">
            <span className="Weatherforecast-temperature-max">30°</span>
            <span className="Weatherforecast-temperature-min">23°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
