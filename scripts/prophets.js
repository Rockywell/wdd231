const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');


async function getProphetData() {

    const response = await fetch(url);
    const data = await response.json();

    // console.table(data.prophets);
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        var card = document.createElement("section");
        var fullName = document.createElement("h2");
        var info = document.createElement("p");
        var portrait = document.createElement("img");

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        info.innerHTML = `Date of Birth: <b>${prophet.birthdate}</b><br>Place of Birth: <b>${prophet.birthplace}</b>`;

        Object.assign(portrait, {
            src: prophet.imageurl,
            alt: `An image of the prophet ${fullName.textContent}`,
            width: 340,
            height: 440,
            loading: "lazy"
        });

        card.append(fullName, info, portrait);

        cards.appendChild(card);
    });
}

getProphetData();