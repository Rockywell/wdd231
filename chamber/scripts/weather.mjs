/*
lat	required	Latitude. If you need the geocoder to automatic convert city names and zip-codes to geo coordinates and the other way around, please use our Geocoding API
lon	required	Longitude. If you need the geocoder to automatic convert city names and zip-codes to geo coordinates and the other way around, please use our Geocoding API
appid	required	Your unique API key (you can always find it on your account page under the "API key" tab)
mode	optional	Response format. Possible values are xml and html. If you don't use the mode parameter format is JSON by default. Learn more
units	optional	Units of measurement. standard, metric and imperial units are available. If you do not use the units parameter, standard units will be applied by default.
Learn more
lang	optional	You can use this parameter to get the output in your language. Learn more
*/

// SETUP

const weatherCard = document.querySelector("#weather");
const weatherForecast = document.querySelector("#weather-forecast");

// select HTML elements in the document
const weatherIconPlaceholder = document.querySelector("#weather-icon");
// const weatherIcon = document.createElement("img");
const currentTemp = document.querySelector("#current-temp");
const weatherDesc = document.querySelector("#weather-desc");
const highTemp = document.querySelector("#high-temp");
const lowTemp = document.querySelector("#low-temp");
const humidity = document.querySelector("#humidity")



// IMPLEMENTATION

const weatherURL = "https://api.openweathermap.org/data/2.5/forecast?appid=04e9252116bd02e4ce0163563ed4d3cd&lat=41.73&lon=-111.83&units=imperial";

export async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            return await response.json();
        } else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

export function getThreeDayForecast(data) {
    // new Date(1758164400 * 1000).toLocaleDateString("en-US", { weekday: "long", timeZone: "America/Denver" });
    // const format = date => date.toLocaleDateString("en-US", { timeZone: "America/Denver" });

    // Tommorows date, (todays date 24 hours from now)
    let targetDate = new Date(Date.now() + 24 * 60 * 60 * 1000);

    const matches = [data.list[0]];
    for (const weather of data.list.slice(1)) {
        const selectedDate = new Date(weather.dt * 1000);

        if (selectedDate.getDate() === targetDate.getDate()) {
            matches.push(weather);

            //Sets the new date to look for the day after.
            targetDate.setDate(targetDate.getDate() + 1);

            if (matches.length === 3) break;
        }
    }

    return matches
}

export async function displayCurrentWeather(data) {

    data ??= await apiFetch(weatherURL);

    const currentWeather = data.list[0];
    let desc = currentWeather.weather[0].description;

    const weatherIcon = document.createElement("img");

    Object.assign(weatherIcon, {
        src: `https://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`,
        alt: desc,
        width: 150,
        height: 150,
        loading: "lazy"
    });

    weatherIconPlaceholder.replaceWith(weatherIcon);
    currentTemp.innerHTML = `${currentWeather.main.temp}&deg;F<br>`;
    highTemp.innerHTML = `High: ${currentWeather.main.temp_max}&deg;F<br>`;
    lowTemp.innerHTML = `Low: ${currentWeather.main.temp_min}&deg;F<br>`;
    humidity.innerHTML = `Humidity: ${currentWeather.main.humidity}%`;
    weatherDesc.innerHTML = `${currentWeather.weather[0].description}<br>`;
}

export async function displayWeatherForecast(data) {

    data ??= await apiFetch(weatherURL);

    const format = date => date.toLocaleDateString("en-US", { weekday: "long", timeZone: "America/Denver" });

    getThreeDayForecast(data).forEach((dayForecast, counter) => {

        let weekday = counter === 0 ? "Today" : format(new Date(dayForecast.dt * 1000));
        let temp = dayForecast.main.temp;

        let dayWeather = document.createElement("p");
        dayWeather.innerHTML = `${weekday}: ${temp}&deg;F`;

        weatherForecast.appendChild(dayWeather);
    })
}