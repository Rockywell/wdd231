const url = 'data/members.json';
const cards = document.querySelector('.cards');

const layoutWrapper = document.createElement("div");
const gridButton = document.createElement("button");
const listButton = document.createElement("button");

layoutWrapper.className = "layouts"

gridButton.textContent = "Grid";
listButton.textContent = "List";

layoutWrapper.append(gridButton, listButton)
cards.before(layoutWrapper);

async function getMembersData() {

    const response = await fetch(url);
    const data = await response.json();

    // console.table(data.members);
    displayMembers(data.members);
}

const displayMembers = (members) => {
    const membershipStatuses = ["bronze", "silver", "gold"];

    members.forEach((member) => {

        var card = document.createElement("section");
        var name = document.createElement("h2");
        var status = document.createElement("span");

        var info = document.createElement("p");
        var icon = document.createElement("img");

        var wrapper = document.createElement("div");
        wrapper.className = "row";

        name.textContent = member.name;
        status.innerHTML = `Member Status: <b>${member.membershipLevel}</b>`;
        info.innerHTML = `Email: <a href="mailto:${member.address}"><b>${member.address}</b></a><br>Phone: <a href="+1${member.phone.split("-").join("")}"><b>${member.phone}</b></a><br>URL: <a href="${member.URL}"><b>${member.URL.replace(/^https?:\/\//, "")}</b></a>`;

        Object.assign(icon, {
            src: member.icon,
            alt: `${member.name} company Logo.`,
            width: 50,
            height: 50,
            loading: "lazy"
        });


        wrapper.append(icon, info);
        card.append(name, status, wrapper);

        card.classList.add(membershipStatuses[member.membershipLevel - 1]);

        cards.appendChild(card);



        // cards.innerHTML = courses.map(course => `<li class="${course.completed ? "completed" : ""}">${course.subject} ${course.number}</li>`).join('');
    });
}

getMembersData();


gridButton.addEventListener("click", () => {
    cards.classList.add("grid");
    cards.classList.remove("list");
});

listButton.addEventListener("click", () => {
    cards.classList.add("list");
    cards.classList.remove("grid");
});