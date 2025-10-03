let currentYear = document.querySelector("#currentyear");
let lastModified = document.querySelector("#lastModified");

currentYear.innerText = new Date().getFullYear();
lastModified.innerText = document.lastModified;


const modal = document.createElement("dialog");
modal.classList.add("notification");

document.body.appendChild(modal);


function displayModal(details) {

    modal.innerHTML = `<button id="closeModal">❌</button>`;

    modal.innerHTML += details;


    if (!modal.open) modal.show();

    let closeModal = document.querySelector("#closeModal");

    closeModal.addEventListener("click", () => {
        modal.close();
    });
}

const msToDays = 86400000;
const last = localStorage.getItem("lastVisit");

const days = last ? Math.floor((Date.now() - Date.parse(last)) / msToDays) : null;

const msg = !last
    ? "Welcome! Let us know if you have any questions."
    : days < 1
        ? "Back so soon! Awesome!"
        : `You last visited ${days} ${days === 1 ? "day" : "days"} ago.`;

localStorage.setItem("lastVisit", new Date().toISOString());


displayModal(`<h2>Note</h2><p>${msg}</p>`);