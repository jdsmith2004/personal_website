// Tutorial by http://youtube.com/CodeExplained
// api key : 82005d27a116c2880c8f0fcb866998a0

// SELECT ELEMENTS
const iconElement = document.querySelector(".weather-icon img");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");

// App data
const weather = {};

weather.temperature = {
  unit: "fahrenheit"
}

// APP CONSTS AND VARS
const KELVIN = 273;
// API KEY
const key = "82005d27a116c2880c8f0fcb866998a0";

// CHECK IF BROWSER SUPPORTS GEOLOCATION
if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
  notificationElement.style.display = "block";
  notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
}

// SET USER'S POSITION
function setPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  getWeather(latitude, longitude);
}

// SHOW ERROR WHEN THERE IS AN ISSUE WITH GEOLOCATION SERVICE
function showError(error) {
  notificationElement.style.display = "block";
  notificationElement.innerHTML = `<p> ${error.message} </p>`;
}

// GET WEATHER FROM API PROVIDER
function getWeather(latitude, longitude) {
  let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

  fetch(api)
    .then(function (response) {
      let data = response.json();
      return data;
    })
    .then(function (data) {
      farenheight = Math.floor(((data.main.temp - KELVIN) * 9 / 5) + 32);
      weather.temperature.value = farenheight;
      weather.description = data.weather[0].description;
      weather.iconId = data.weather[0].icon;
      weather.city = data.name;
      // weather.country = data.sys.country;
    })
    .then(function () {
      displayWeather();
    });
}

// DISPLAY WEATHER TO UI
function displayWeather() {
  iconElement.src = `images/icons/weatherIcons/${weather.iconId}.png`;
  tempElement.innerHTML = `${weather.temperature.value}°<span>F</span>`;
  descElement.innerHTML = weather.description;
  locationElement.innerHTML = `${weather.city}`; //, add this for country ${weather.country}
}

// C to F conversion
function celsiusToFahrenheit(temperature) {
  return (temperature * 9 / 5) + 32;
}

function fahrenheitToCelsius(temperature) {
  return (temperature - 32) * (5 / 9);
}

// WHEN THE USER CLICKS ON THE TEMPERATURE ELEMENET
tempElement.addEventListener("click", function () {
  if (weather.temperature.value === undefined) return;

  if (weather.temperature.unit == "celsius") {
    // let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
    // fahrenheit = Math.floor(fahrenheit);

    tempElement.innerHTML = `${weather.temperature.value}°<span>F</span>`;
    weather.temperature.unit = "fahrenheit";
  } else {
    let celsius = Math.floor(fahrenheitToCelsius(weather.temperature.value))
    tempElement.innerHTML = `${celsius}°<span>C</span>`;
    weather.temperature.unit = "celsius"
  }
});
// date elements
let today = new Date();
let dayOfMonth = today.getDate();
let day = today.getDay();
let month = today.getMonth();
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
document.getElementById('date-time').innerHTML = `${dayNames[day]}, ${monthNames[month]} ${dayOfMonth}`;