let currentYear = document.querySelector("#currentyear");
let lastModified = document.querySelector("#lastModified");

currentYear.innerText = new Date().getFullYear();

lastModified.innerText = document.lastModified;