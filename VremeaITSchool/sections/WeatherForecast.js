const displayWeatherForecast = city => {
    const weatherForecastContainer = document.querySelector(".weather-forecast");
  
    const endpoint = getForecastEndpoint(city);
  
    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        const { list } = data;
  
        const daysMap = {};
  
        list.forEach(element => {
          const { dt } = element;
  
          const day = getDayOfTheWeek(dt);
  
          if (daysMap[day]) {
            daysMap[day].push(element);
          } else {
            daysMap[day] = [element];
          }
        });
  
        weatherForecastContainer.innerHTML = "";
  
        for (key in daysMap) {
          weatherForecastContainer.innerHTML += /*html*/ `<h3 class="text-primary">${key}</h3>`;
  
          daysMap[key].forEach(element => {
            const { dt, weather, main } = element;
  
            const day = getDayOfTheWeek(dt);
            const hour = getHour(dt);
  
            const icon = getWeatherIcon(weather[0].icon);
  
            const temperature = Math.round(main.temp);
            const realFeel = Math.round(main.feels_like);
  
            weatherForecastContainer.innerHTML += /*html*/ `
            <div class="weather-forecast-box d-flex justify-content-between align-items-center border rounded p-3 mb-3">
              <div>
                ${hour}
              </div>
              <div>
                <img src="${icon}" />
              </div>
              <div class="fs-3"><strong>${temperature}°C</strong></div>
              <div>${weather[0].description}</div>
              <div class="real-feel">Real feel: <strong>${realFeel}°C</strong></div>
            </div>
          `;
          });
        }
      });
  };
  