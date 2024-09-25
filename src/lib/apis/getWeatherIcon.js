import {
  faMoon,
  faCloudShowersHeavy,
  faCloudMoon,
  faCloudSun,
  faCloud,
  faCloudRain,
  faCloudBolt,
  faSnowflake,
  faSmog,
} from "@fortawesome/free-solid-svg-icons";

const getWeatherIcon = (iconCode) => {
  switch (iconCode) {
    case "01d": // Clear sky day
      return { icon: faCloudSun, color: "#f39c12" };
    case "01n": // Clear sky night
      return { icon: faMoon, color: "#f1c40f" };
    case "02d": // Few clouds day
      return { icon: faCloudMoon, color: "#3498db" };
    case "02n": // Few clouds night
      return { icon: faCloud, color: "#95a5a6" };
    case "03d":
    case "03n": // Scattered clouds
      return { icon: faCloud, color: "#7f8c8d" };
    case "04d":
    case "04n": // Broken clouds
      return { icon: faCloud, color: "#bdc3c7" };
    case "09d":
    case "09n": // Shower rain
      return { icon: faCloudRain, color: "#3498db" };
    case "10d":
    case "10n": // Rain
      return { icon: faCloudShowersHeavy, color: "#fff" };
    case "11d":
    case "11n": // Thunderstorm
      return { icon: faCloudBolt, color: "#e74c3c" };
    case "13d":
    case "13n": // Snow
      return { icon: faSnowflake, color: "#ecf0f1" };
    case "50d":
    case "50n": // Mist
      return { icon: faSmog, color: "#7f8c8d" };
    default:
      return { icon: faCloud, color: "#bdc3c7" }; // Default icon
  }
};

export default getWeatherIcon;
