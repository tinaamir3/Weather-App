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
    let windElement= document.querySelector("#windII");
    let dateTimeElement= document.querySelector("#dateTime");
    let sunriseElement=document.querySelector("#sunrise")
    let sunsetElement=document.querySelector("#sunset");
    let iconElement=document.querySelector("#icon");

    temperatureElement.innerHTML= Math.round(response.data.main.temp);
cityElement.innerHTML=response.data.name;
feelsLikeElement.innerHTML=Math.round(response.data.main.feels_like);
descriptionElement.innerHTML=response.data.weather[0].description;
windElement.innerHTML=Math.round(response.data.wind.speed);
dateTimeElement.innerHTML=formatDate(response.data.dt * 1000);
sunriseElement.innerHTML=formatTime(response.data.sys.sunrise*1000);
sunsetElement.innerHTML=formatTime(response.data.sys.sunset*1000);
iconElement.setAttribute(
    "src", 
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    iconElement.setAttribute("alt", response.data.weather[0].description);
} 
function search(event){
    event.preventDefault();
    let cityInputElement= document.querySelector("#city-input");
}
 let apiKey= "1b8abfcfd13f6be4d6f095c6de05ba7f";
 let city= "Toronto";
 let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

 axios.get(apiUrl).then(displayTemperature);

let form= document.querySelector("#search-form");
form.addEventListener("submit",search);

