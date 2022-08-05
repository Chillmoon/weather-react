import React from "react";
import "./styles.css";
import Weather from "./Weather";
import Search from "./Search.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App </h1>
        <Search />
        <Weather />
      </div>
    </div>
  );
}
