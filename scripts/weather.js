// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data); // testing only
            displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

/*
lat	required	Latitude. If you need the geocoder to automatic convert city names and zip-codes to geo coordinates and the other way around, please use our Geocoding API
lon	required	Longitude. If you need the geocoder to automatic convert city names and zip-codes to geo coordinates and the other way around, please use our Geocoding API
appid	required	Your unique API key (you can always find it on your account page under the "API key" tab)
mode	optional	Response format. Possible values are xml and html. If you don't use the mode parameter format is JSON by default. Learn more
units	optional	Units of measurement. standard, metric and imperial units are available. If you do not use the units parameter, standard units will be applied by default.
Learn more
lang	optional	You can use this parameter to get the output in your language. Learn more
*/



// lat 49.75, long 6.63
const url = 'https://api.openweathermap.org/data/2.5/weather?appid=04e9252116bd02e4ce0163563ed4d3cd&lat=49.75&lon=6.63&units=imperial';

apiFetch(url);
function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);

    captionDesc.textContent = `${desc}`;
}