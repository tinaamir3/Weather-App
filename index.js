 function formatDate(timestamp){
     let date= new Date(timestamp);
     let hours= date.getHours();
     let minutes=date.getMinutes();
     let days= [
         "Sunday", 
         "Monday", 
         "Tuesday",
         "Wednesday",
         "Thursday",
         "Friday",
         "Saturday"
        ];
         let day= days[date.getDay()];
         return `${day}, ${hours}:${minutes}`;
 }
 function formatTime(timestamp){
     let date= new Date(timestamp);
     let hours= date.getHours();
     let minutes=date.getMinutes();
    
         return `${hours}:${minutes}`;
 }

 function displayTemperature(response){
    let temperatureElement= document.querySelector("#temperature");
    let cityElement= document.querySelector("#city");
    let feelsLikeElement= document.querySelector("#feels");
    let descriptionElement= document.querySelector("#description");
    let windElement= document.querySelector("#wind");
    let humidityElement=document.querySelector("#humidity");
    let dateTimeElement= document.querySelector("#dateTime");
    let iconElement=document.querySelector("#icon");

    console.log(response.data);

    temperatureElement.innerHTML= Math.round(response.data.main.temp);
cityElement.innerHTML=response.data.name;
feelsLikeElement.innerHTML=Math.round(response.data.main.feels_like);
descriptionElement.innerHTML=response.data.weather[0].description;
windElement.innerHTML=Math.round(response.data.wind.speed);
humidityElement.innerHTML=(response.data.main.humidity);
dateTimeElement.innerHTML=formatDate(response.data.dt * 1000);
iconElement.setAttribute(
    "src", 
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    iconElement.setAttribute("alt", response.data.weather[0].description);
} 

function search(city) {
 let apiKey= "1b8abfcfd13f6be4d6f095c6de05ba7f";
 let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);

}
function handleSubmit(event){
    event.preventDefault();
    let cityInputElement= document.querySelector("#city-input");
search(cityInputElement.value);
}


search("Toronto");

let form= document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);
