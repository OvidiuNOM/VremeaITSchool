const API_KEY = "ca664740dcf7743051743931d788e69d";
const BASE_API_URL = "https://api.openweathermap.org/data/2.5";

const getCurrentWeatherEndpoint = city => {
    return `${BASE_API_URL}/weather?q=${city}&appid=${API_KEY}&lang=ro&units=metric`;

};

const getForecastEndpoint = city => {
    return `${BASE_API_URL}/forecast?q=${city}&appid=${API_KEY}&lang=ro&units=metric`;
}