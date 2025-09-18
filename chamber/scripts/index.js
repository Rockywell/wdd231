import displayMembers, { getMembersData } from './members.mjs';
import { displayCurrentWeather, displayWeatherForecast } from './weather.mjs';


function shuffle(array) {
    const a = [...array];

    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }

    return a;
}




const members = await getMembersData();

let VIPMembers = members.filter(m => m.membershipLevel >= 2);

// VIPMembers.sort(Math.floor(Math.random() * VIPMembers.length)


displayMembers(shuffle(VIPMembers).slice(0, 3));
displayCurrentWeather();
displayWeatherForecast();