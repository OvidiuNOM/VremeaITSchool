const displayCurrentWeather = city => {
    const endpoint = getCurrentWeatherEndpoint(city);

    fetch(endpoint).then(response => response.json()).then(data => {
        // console.log(data)

        const {
            name, dt, main, weather, wind
        } =data;

        const day = getDayOfTheWeek(dt);

        const hour = getHour(dt);

        const temperature = Math.round(main.temp);
        const realFeel = Math.round(main.feels_like);

        const icon = getWeatherIcon(weather[0].icon);

        const description = weather[0].description;

        const windspeed = Math.round(windToKmPerHour(wind.speed));
        

        const currentWeatherContainer = document.querySelector(".current-weather");
        currentWeatherContainer.innerHTML = /* html */ `
        <div class="px-3">
            <div class="fs-2 mb-2"><strong>${name}</strong></div>
            <div class="fs-4"><strong>${day}, ${hour} </strong></div>
            <div class="d-flex align-items-center justify-content-center">
            <strong class="fs-1"> ${temperature}°C </strong>
            <img src="${icon}"/>
            </div>
        </div>

        <div class="px-3">
        <p class="fs-5"> Real feel: <strong>${realFeel} °C</strong></p>
        <p class="fs-5 text-capitalize"> ${description} </p>
         <p class="fs-5"> Vant: <strong>${windspeed} km/h</strong></p>
        </div>
        `
    });
};