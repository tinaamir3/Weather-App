let now = new Date();
let h6 = document.querySelector("h6");
let hours = now.getHours();
let minutes = now.getMinutes();
let days = ["Sun", "Mon", "Tue,", "Wed", "Thu", "Fri", "Sat", "Sun"];
let day = days[now.getDay()];
h6.innerHTML = `${day} ${hours}:${minutes}`;

//weather api
function displayWeather(response) {
  console.log(response.data);
  document.querySelector("#city").innerHTML = response.data.name;
  let temperature = Math.round(response.data.main.temp);
  let message = `${temperature}°`;
  document.querySelector("h3").innerHTML = message;
  document.querySelector("#feelsLike").innerHTML = Math.round(
    response.data.main.feels_like
  );
  document.querySelector("#presc").innerHTML = response.data.main.humidity;
  document.querySelector("#windII").innerHTML = response.data.wind.speed;
}
function search(event) {
  event.preventDefault();
  let apiKey = "1b8abfcfd13f6be4d6f095c6de05ba7f";
  let units = "metric";
  let city = document.querySelector("#city-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayWeather);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

//celsius to fahrenheit vise vs
function celsiusChange(event) {
  event.preventDefault();
  let h3 = document.querySelector("h3");
  h3.innerHTML = "28°";
  let p = document.querySelector("p");
  p.innerHTML = "Feels like: 32°";
}
let celsiusLink = document.querySelector("#celsius");
celsiusLink.addEventListener("click", celsiusChange);

function fahrenheitChange(event) {
  event.preventDefault();
  let h3 = document.querySelector("h3");
  h3.innerHTML = "82°";
  let p = document.querySelector("p");
  p.innerHTML = "Feels like: 90°";
}
let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click", fahrenheitChange);
