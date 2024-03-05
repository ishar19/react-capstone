import { useEffect, useState } from "react";

export default function Weather() {
  const [weather, setWeather] = useState(null);

  // useEffect(() => {
  //   fetch(
  //     "https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=rM8TSevwA36UZ5QiHWAt5O86B2s6zGjq"
  //   )
  //     .then((data) => data.json())
  //     .then((data) => setWeather(data))
  //     .catch((error) => console.log(error));
  // }, []);
  console.log(weather);
  return (
    <div
      style={{
        background: " #5746EA ",
        width: "25vw",
        padding: "16px",
        color: "white",
      }}
    >
      <p>Weather</p>
      {weather
        ? weather.timelines.daily[0].values.temperatureAvg > 20
          ? "Sunny"
          : "Winter"
        : "Loading..."}
      <p>Temperature</p>
      {weather
        ? weather.timelines.daily[0].values.temperatureAvg
        : "Loading..."}
      <p>Humidity</p>
      {weather ? weather.timelines.daily[0].values.humidityAvg : "Loading..."}
      <p>Wind</p>
      {weather ? weather.timelines.daily[0].values.windGustAvg : "Loading..."}
    </div>
  );
}
