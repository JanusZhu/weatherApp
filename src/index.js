import weather from "./modules/weather";
import view from "./modules/view";

const data = weather.getWeatherData("Seoul");
view.loadData(data);

const form = document.querySelector("form");
const searchBtn = document.querySelector(".search");
const searchInput = document.querySelector("#city");
const switchBtn = document.querySelector(".switch");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

searchBtn.addEventListener("click", () => {
  if (searchInput.value === "") {
    return;
  }
  view.loadData(weather.getWeatherData(searchInput.value));
});

switchBtn.addEventListener("click", () => {
  if (switchBtn.textContent === "C") {
    switchBtn.textContent = "F";
  } else {
    switchBtn.textContent = "C";
  }
  weather.changeUnit();
  view.loadData(weather.getWeatherData(searchInput.value || "Seoul"));
});
