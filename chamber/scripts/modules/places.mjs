import getData from './json.mjs';

//SETUP
const cards = document.querySelector('.cards');

const layoutWrapper = document.createElement("div");
layoutWrapper.className = "layouts"
cards.before(layoutWrapper);

//IMPLEMENTATION
const url = 'data/places.json';

export const getPlacesData = async () => await getData(url);


export default async function displayPlaces(places) {
    const frag = document.createDocumentFragment();

    places ??= await getPlacesData();

    places.forEach((place) => {

        var card = document.createElement("section");

        var name = document.createElement("h2");

        var image = document.createElement("img");
        var address = document.createElement("address");
        var info = document.createElement("p");
        var button = document.createElement("button");


        var figure = document.createElement("figure");
        // var wrapper = document.createElement("div");
        // wrapper.className = "row";

        name.textContent = place.name;
        address.textContent = place.address;
        info.textContent = place.description;
        button.textContent = "Learn More";

        Object.assign(image, {
            src: place.URL,
            alt: `${place.name}`,
            width: 300,
            height: 200,
            loading: "lazy"
        });

        figure.append(image);
        // figure.innerHTML += `<figcaption>${image.alt}</figcaption>`;

        // wrapper.append(figure, address, info);
        // info.append(button);
        card.append(name, figure, address, info, button);//, button);

        // card.classList.add(membershipStatuses[member.membershipLevel - 1]);

        frag.appendChild(card);



        // cards.innerHTML = courses.map(course => `<li class="${course.completed ? "completed" : ""}">${course.subject} ${course.number}</li>`).join('');
    });

    cards.appendChild(frag);
}