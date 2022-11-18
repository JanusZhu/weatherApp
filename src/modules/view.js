const view = (() => {
  const unit = "°";
  const errorMessage = document.querySelector("#errorMessage");
  function handleNotFound(city) {
    errorMessage.textContent = `City ${city} not found`;
  }
  async function loadData(e) {
    const data = await e;
    if (data) {
      console.log(data);
      errorMessage.textContent = "";
      document.querySelector("#cityName").textContent = data.cityName;
      document.querySelector("#countryName").textContent = data.countryName;
      document.querySelector("#temperature").textContent =
        data.temperature + unit;
      document.querySelector("#feelsLike").textContent = data.feelsLike + unit;
      // eslint-disable-next-line prefer-template
      document.querySelector("#humidity").textContent = data.humidity + "%";
    }
  }
  return { loadData, handleNotFound };
})();
export default view;
