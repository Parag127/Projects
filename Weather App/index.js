document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const searchButton = document.getElementById("search-button");
  const weatherInfo = document.getElementById("weather-info");
  const cityName = document.getElementById("city-name");
  const cityTemperature = document.getElementById("temperature");
  const citydescrition = document.getElementById("description");
  const weatherIcon = document.getElementById("weather-icon");
  const errMsg = document.getElementById("error-message");
  const API_KEY = "a820878337420c5285374f4baccd438b";
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  searchButton.addEventListener("click", async (e) => {
    e.preventDefault();

    const city = cityInput.value.trim();
    if (city === "") return;
    console.log(`Button clicked. city : ${city}`);

    try {
      const data = await fetchData(city);
      displayContent(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      showError();
    }
    cityInput.value = "";
  });

  async function fetchData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    console.log("Fetching data from:", url);
    const response = await fetch(url);
    console.log("Response", response);
    if (!response.ok) {
      throw new Error("City not Found");
    }
    const data = response.json();
    return data;
  }

  function displayContent(data) {
    console.log(data);
    const { name, main, weather } = data;
    cityName.textContent = `City:  ${name}`;
    cityTemperature.textContent = `Temperature: ${main.temp}`;
    citydescrition.textContent = `Weather: ${weather[0].description}`;
    weatherIcon.src = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

    weatherInfo.classList.remove("hidden");
    errMsg.classList.add("hidden");
  }

  function showError() {
    weatherInfo.classList.add("hidden");
    errMsg.classList.remove("hidden");
  }
});
