/* eslint-disable prefer-template */
const view = (() => {
  const unit = "°";
  const errorMessage = document.querySelector("#errorMessage");
  function handleNotFound(city) {
    errorMessage.textContent = `City ${city} not found`;
  }
  async function loadData(e) {
    const data = await e;
    if (data) {
      // eslint-disable-next-line spaced-comment
      //console.log(data);
      errorMessage.textContent = "";
      document.querySelector("#cityName").textContent = data.cityName;
      document.querySelector("#countryName").textContent =
        ", " + data.countryName;
      document.querySelector("#description").textContent = data.description;
      document.querySelector("#temperature").textContent =
        Math.round(data.temperature) + unit;
      document.querySelector("#minTemp").textContent =
        "Min: " + Math.round(data.minTemp) + unit;
      document.querySelector("#maxTemp").textContent =
        "Max: " + Math.round(data.maxTemp) + unit;
      document.querySelector("#feelsLike").textContent =
        Math.round(data.feelsLike) + unit;
      // eslint-disable-next-line prefer-template
      document.querySelector("#humidity").textContent = data.humidity + "%";
    }
  }
  return { loadData, handleNotFound };
})();
export default view;
