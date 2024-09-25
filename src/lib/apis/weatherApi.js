export const getWeatherData = async (city) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      return { error: "something went wrong" };
    }
    const data = await response.json();
    return { data, city };
  } catch (error) {
    return { error: "something went wrong" };
  }
};
