import React from "react";
import "./styles.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Smila" />
      </div>
      <footer>
        This project was coded by <a href="https://t.me/Chillmoon">Chillmoon</a>{" "}
        and is open-sourced on{" "}
        <a href="https://github.com/Chillmoon/weather-react">GitHub</a>.
      </footer>
    </div>
  );
}
