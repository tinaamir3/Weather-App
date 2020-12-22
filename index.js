 function displayTemperature(response){
    let temperatureElement= document.querySelector("#temperature");
    let cityElement= document.querySelector("#city");
    let feelsLikeElement= document.querySelector("#feels");
    let descriptionElement= document.querySelector("#description");
    let windElement= document.querySelector("#windII");
    temperatureElement.innerHTML= Math.round(response.data.main.temp);
cityElement.innerHTML=response.data.name;
feelsLikeElement.innerHTML=Math.round(response.data.main.feels_like);
descriptionElement.innerHTML=response.data.weather[0].description;
windElement.innerHTML=Math.round(response.data.wind.speed);
console.log (response.data);
} 
 let apiKey= "1b8abfcfd13f6be4d6f095c6de05ba7f";
 let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=${apiKey}&units=metric`;


 axios.get(apiUrl).then(displayTemperature);