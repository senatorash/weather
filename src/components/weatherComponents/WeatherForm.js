import { useState } from "react";
import ErrorComponent from "../../commons/ErrorComponent";
import classes from "./Weather.module.css";

const WeatherForm = ({ onSearch, isError, errorMessage }) => {
  const [city, setCity] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (city.trim().length > 0) {
      setIsLoading(true);
      await onSearch(city);
      setCity("");
      setIsLoading(false);
    }
  };

  return (
    <form style={{ marginTop: "30px" }} onSubmit={handleSubmit}>
      {isError && (
        <ErrorComponent errorMessage={errorMessage || "something went wrong"} />
      )}
      <div className="form-group">
        <input
          className="form-control mb-3"
          type="text"
          value={city}
          placeholder="Enter city name"
          onChange={(event) => setCity(event.target.value)}
        />
      </div>

      <div>
        <input
          className={`form-control ${classes.btn}`}
          type="submit"
          disabled={isLoading}
          value={isLoading ? "Please Wait..." : "Get Weather"}
        />
      </div>
    </form>
  );
};

export default WeatherForm;
