import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeaterIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} alt={props.data.description} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row weatherInfo">
        <div className="col-6">
          <WeatherIcon code={props.data.icon} />
          <img src="/" alt="cloudy" />
          <span className="temperature">{props.data.temperature}</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
