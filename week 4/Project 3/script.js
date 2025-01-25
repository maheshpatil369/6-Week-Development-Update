const apiKey = ;
const searchButton = document.getElementById("searchButton");
const cityInput = document.getElementById("cityInput");
const weatherDisplay = document.getElementById("weatherDisplay");
const cityName= document.getElementById("cityName");
const weatherDescription = document.getElementById("weatherDescription");
const temperature = document.getElementById("temparature");
const weatherIcon = document.getElementById("weatherIcon");
const errorMessage = document.getElementById("errorMessage");

searchButton.addEventListener("click", () => {
    const city = cityInput.value;
    if (!city) {
        showError("Please enter a city name.");
        return;
    }
    fetchWeather(city);
});