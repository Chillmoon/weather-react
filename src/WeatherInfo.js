import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import CountryFlag from "./CountryFlag";

export default function WeatherInfo(props) {
  return (
    <div className="row WeatherInfo">
      <div className="col-9">
        <h1>
          {props.data.city}{" "}
          <span className="country">({props.data.country})</span>
        </h1>
        <ul>
          <li>
            <FormattedDate
              date={props.data.date}
              alt={props.data.description}
            />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
      </div>
      <div className="col-3">
        <CountryFlag country={props.data.country} />
      </div>
      <div className="row">
        <div className="col-7 iconInfo">
          <WeatherIcon code={props.data.icon} size={60} />
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="col-5 weatherInfo">
          <ul className="pt-3">
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
