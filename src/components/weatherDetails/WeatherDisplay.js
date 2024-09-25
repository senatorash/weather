import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Weather.module.css";
import getWeatherIcon from "../../lib/apis/getWeatherIcon";

const WeatherDisplay = ({ weatherData }) => {
  console.log(weatherData);

  const iconCode = weatherData.weather[0].icon;
  const { icon, color } = getWeatherIcon(iconCode);

  const roundTemp = Math.floor(weatherData.main.temp);
  const roundfeelsLike = Math.floor(weatherData.main.feels_like);
  const highTemp = Math.floor(weatherData.main.temp_max);
  const lowTemp = Math.floor(weatherData.main.temp_min);

  return (
    <>
      <FontAwesomeIcon
        className="mt-sm-5"
        icon={icon}
        size="6x"
        style={{ color, marginTop: "50px" }}
      />
      <div className={`row top-sm-0 ${classes.weather_display} `}>
        {/* <img src={iconUrl} /> */}
        {/* <div className="col-lg-2 "></div> */}
        <div className="col-lg-4 col-md-4 col-sm-12 col-12 text-sm-center text-center">
          <h1>{roundTemp}°C</h1>
          <p>Feels like {roundfeelsLike}°C</p>
        </div>

        <div
          className={`col-lg-4 col-md-4 col-sm-4 col-4 text-sm-end ${classes.weather_name}`}
        >
          <h3 style={{ fontSize: "25px" }}> {weatherData.name}</h3>
          <p>High {highTemp}°</p>
          <p>Low {lowTemp}°</p>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-6 col-6 text-end">
          <h3 style={{ textTransform: "capitalize" }}>
            {weatherData.weather[0].description}
          </h3>
          <p>Humidity: {weatherData.main.humidity} %</p>
          <p>Wind: {weatherData.wind.speed} km/h</p>
          {/* <p>Sunrise: {sunrise}</p>
      <p>Sunset: {sunset}</p> */}
        </div>
      </div>
    </>
  );
};
export default WeatherDisplay;
