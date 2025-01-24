function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement =document.querySelector("#city");
let descriptionElement = document.querySelector("#description");
let humidityElement = document.querySelector("#humidity");
let windspeedElenent = document.querySelector("#wind-speed");
let timeElement = document.querySelector("#time");

    

cityElement.innerHTML = response.data.city;
descriptionElement.innerHTML = response.data.condiion.description;
humidityElement.innerHTML = '${response.data.temperature.humidity}%';
windspeedElenent.innerHTML = '${response.data.wind.speed}';
timeElement.innerHTML = "Tuesday 14:49";
    temperatureElement.innerHTML = Math.round(temperature);
    
}

function searchCity(city) {
    let apiKey= "44f618d99f8a16c0a9a9065877f062b1";
    let apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q={city}&key={44f618d99f8a16c0a9a9065877f062b1}&units=metric';

}

function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchInput.value;
}

 let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Paris")