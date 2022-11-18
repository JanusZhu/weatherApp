import view from "./view";

const weather = (() => {
  let defaultUnit = "metric";
  function convertData(data) {
    const {
      name: cityName,
      sys: { country: countryName },
      main: { temp: temperature, feels_like: feelsLike, humidity },
    } = data;
    return { cityName, countryName, temperature, feelsLike, humidity };
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
      console.log(city, defaultUnit);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${defaultUnit}&APPID=91154c32e8c2d8683cf71708688624ee`,
        { mode: "cors" }
      );
      if (!response.ok) {
        throw new Error("City not found");
      }
      const json = await response.json();
      console.log(json);
      const data = convertData(json);
      return data;
    } catch (error) {
      if (error.message === "City not found") {
        view.handleNotFound(city);
      }
      console.log(error);
      return null;
    }
  }
  return { getWeatherData, changeUnit };
})();
export default weather;
