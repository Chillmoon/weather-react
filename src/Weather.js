import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>Lisbon</h1>
      <ul>
        <li>Tuesday 18:15</li>
        <li>Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="cloudy"
          />
          25 °C
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 70%</li>
            <li>Wind: 10 km/h</li>
          </ul>
          <button type="button" class="btn btn-outline-primary">
            Primary
          </button>
        </div>
      </div>
    </div>
  );
}
