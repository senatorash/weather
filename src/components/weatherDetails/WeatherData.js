import { getWeatherData } from "../../lib/apis/weatherApi";
import { useState, useEffect } from "react";
import WeatherDisplay from "./WeatherDisplay";
import WeatherForm from "./WeatherForm";
import RecentSearch from "./RecentSearch";
import classes from "./Weather.module.css";

const WeatherData = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [recentSearches, setRecentSearches] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const onGetWeatherData = async (city) => {
    const result = await getWeatherData(city);

    if (result.error) {
      setErrorMessage("City not found");
      setIsError(true);
    } else if (result && result.data) {
      setWeatherData(result.data);
      setIsError(false);
      updateRecentSearches(city);
    } else {
      setErrorMessage("");
      setIsError(false);
    }
  };

  // load recent searches from local storage
  const updateRecentSearches = (city) => {
    let updatedSearches = [...recentSearches];
    if (!updatedSearches.includes(city)) {
      // Add new Search term to the start of the array
      updatedSearches.unshift(city);
    }
    // limit to 5 recent searches
    updatedSearches = updatedSearches.slice(0, 5);

    setRecentSearches(updatedSearches);
    localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
  };

  useEffect(() => {
    const storedSearches =
      JSON.parse(localStorage.getItem("recentSearches")) || [];
    setRecentSearches(storedSearches);
    // onGetWeatherData("london");
  }, []);

  return (
    <section className="container">
      <div className="row">
        <div className="col-lg-8 col-12">
          {weatherData && <WeatherDisplay weatherData={weatherData} />}
        </div>

        <div
          className={`col-lg-4 col-12 ${classes.weather_section}`}
          style={{ marginTop: "-50px" }}
        >
          <WeatherForm
            onSearch={onGetWeatherData}
            errorMessage={errorMessage}
            isError={isError}
          />
          <RecentSearch
            searches={recentSearches}
            onSelectCity={onGetWeatherData}
          />
        </div>
        <div className=" col-12"></div>
      </div>
    </section>
  );
};

export default WeatherData;
