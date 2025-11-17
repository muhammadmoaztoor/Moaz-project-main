// src/components/WeatherApp.jsx
import React, { useState } from "react";

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = () => {
    // Placeholder data
    if (city.trim() !== "") {
      setWeather({
        temp: "25°C",
        condition: "Sunny",
        humidity: "50%",
      });
    }
  };

  return (
    <div style={styles.container}>
      <h1>Weather App</h1>
      <input
        type="text"
        value={city}
        placeholder="Enter city"
        onChange={(e) => setCity(e.target.value)}
        style={styles.input}
      />
      <button onClick={getWeather} style={styles.button}>Get Weather</button>
      {weather && (
        <div style={styles.weatherBox}>
          <p>City: {city}</p>
          <p>Temperature: {weather.temp}</p>
          <p>Condition: {weather.condition}</p>
          <p>Humidity: {weather.humidity}</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: { color: "white", textAlign: "center", padding: "20px" },
  input: { padding: "10px", borderRadius: "5px", border: "1px solid #00bcd4", marginRight: "10px" },
  button: { padding: "10px 15px", borderRadius: "5px", border: "none", background: "#00bcd4", color: "white", cursor: "pointer" },
  weatherBox: { marginTop: "20px", background: "#111", padding: "15px", borderRadius: "5px" },
};
