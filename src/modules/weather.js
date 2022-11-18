import view from "./view";

const weather = (() => {
  let defaultUnit = "metric";
  function convertData(data) {
    const {
      name: cityName,
      sys: { country: countryName },
      main: {
        temp: temperature,
        feels_like: feelsLike,
        temp_min: minTemp,
        temp_max: maxTemp,
        humidity,
      },
      weather: [{ main: description }],
    } = data;
    return {
      cityName,
      countryName,
      description,
      temperature,
      feelsLike,
      minTemp,
      maxTemp,
      humidity,
    };
  }
  function changeUnit() {
    if (defaultUnit === "metric") {
      defaultUnit = "imperial";
    } else {
      defaultUnit = "metric";
    }
  }
  async function getWeatherData(city) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${defaultUnit}&APPID=28fe7b5f9a78838c639143fc517e4343`,
        { mode: "cors" }
      );
      if (!response.ok) {
        throw new Error("City not found");
      }
      const json = await response.json();
      const data = convertData(json);
      return data;
    } catch (error) {
      if (error.message === "City not found") {
        view.handleNotFound(city);
      }
      return null;
    }
  }
  return { getWeatherData, changeUnit };
})();
export default weather;
