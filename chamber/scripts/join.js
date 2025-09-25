document.getElementById("timestamp").value = document.lastModified;

memberDetails = {
    "non-profit": `
        <h2>Non-Profit Membership</h2>
        <p><strong>Fee</strong>: Free!</p>
        <br>
        <p>Collaborate with local business, and share local info across businesses!</p>
    `,
    "bronze": `
        <h2>Bronze Membership</h2>
        <p><strong>Fee</strong>: $500</p>
        <br>
        <p>Collaborate with local business, and share local info across businesses!</p>
        <p>Meet yearly with the chamber of commerce to influence regulation standards.</p>
    `,
    "silver": `
        <h2>Silver Membership</h2>
        <p><strong>Fee</strong>: $1000</p>
        <br>
        <p>Collaborate with local business, and share local info across businesses!</p>
        <p>Gain noteriety from the locals and be spotlighted on the website!</p>
        <p>Meet monthly with the chamber of commerce to influence regulation standards.</p>
    `,
    "gold": `
        <h2>Gold Membership</h2>
        <p><strong>Fee</strong>: $2500</p>
        <br>
        <p>Collaborate with local business, and share local info across businesses!</p>
        <p>Gain noteriety from the locals and be spotlighted on the website!</p>
        <p>Meet <strong>anytime</strong> with the chamber of commerce to direct regulation standards.</p>
    `
}


const modals = document.querySelector(".cards");
const modal = document.querySelector("dialog");


modals.addEventListener("click", (e) => {
    const memberInfo = e.target.closest("button");

    if (memberInfo) {
        modal.className = memberInfo.dataset.membership
        selectedDetails = memberDetails[memberInfo.dataset.membership];

        displayModal(selectedDetails);
    }
})

function displayModal(details) {

    modal.innerHTML = `<button id="closeModal">❌</button>`;

    modal.innerHTML += details;

    modal.showModal();

    let closeModal = document.querySelector("#closeModal");

    closeModal.addEventListener("click", () => {
        modal.close();
    });
}