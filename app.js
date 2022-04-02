let weather = {
    apiKey: "e9fb52ee27d553cf37e289d86d70b609",
    fetchWeather: function (city) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`     
      ) .then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },

    displayWeather: function(data){
        const {name} = data;
        const {icon , description} = data.weather[0]
        const {temp , humidity} = data.main
        const {speed} = data.wind
        const {country} = data.sys
        console.log(name,icon,description,temp,humidity,speed,country)
        document.querySelector(".city").innerText = name;
        document.querySelector(".state-region").innerText = country;
        document.querySelector(".temperature-in-c").innerText = temp;
        document.querySelector(".wind-speed").innerText = `Wind ${speed}kmph`;
        document.querySelector(".humidity").innerText = "Humidity " +  humidity + "%";
        document.querySelector(".temp-condition").innerText = description;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + ".png";
    },

    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };
  
  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });
  
  document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if (event.key == "Enter"){ 
      weather.search()
    }
  });
 
