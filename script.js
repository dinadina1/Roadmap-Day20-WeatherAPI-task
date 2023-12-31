const apiKey = "5dbbbdb19a15927fa1338b574ea61c22";
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherCard = document.getElementById("weatherCard");
const weatherDetails = document.getElementById("weatherDetails");

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();

  if (city !== "") {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    )
      .then((response) => response.json())

      .then((data) => {
        weatherDetails.innerHTML = `
            <p><strong>City:</strong> ${data.name}</p>
            <p><strong>Weather:</strong> ${data.weather[0].main}</p>
            <p><strong>Temperature:</strong> ${(
              data.main.temp - 273.15
            ).toFixed(2)} °C</p>
            <p><strong>Description:</strong> ${data.weather[0].description}</p>
            <p><strong>Wind Speed:</strong> ${data.wind.speed} mph</p>`;

        // Show the weather card
        weatherCard.style.display = "block";
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }
});
