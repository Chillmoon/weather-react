import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function max() {
    let max = Math.round(props.data.temp.max);

    return max;
  }

  function min() {
    let min = Math.round(props.data.temp.min);

    return min;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={50} />
      <div className="Weatherforecast-temperature">
        <span className="Weatherforecast-temperature-max">{max()}°</span>
        <span className="Weatherforecast-temperature-min">{min()}°</span>
      </div>
    </div>
  );
}
