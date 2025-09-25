const membershipStatuses = ["Non-Profit", "Bronze", "Silver", "Gold"];
const memberInfo = new URLSearchParams(window.location.search);

const memberDoc = document.querySelector("#member");
const header = memberDoc.querySelector("h1");
const memberReceipt = memberDoc.querySelector("section");
const memberRecieptInfo = memberReceipt.querySelector("#reciept");

const membershipLevel = +memberInfo?.get("membership_level");
const membershipStatus = membershipStatuses[membershipLevel];

memberReceipt.classList.add(`${membershipStatus.toLowerCase()}`);
header.textContent += ` For Becoming a ${membershipStatus} Member`;



memberRecieptInfo.innerHTML = `
<p>${membershipStatus} membership confirmed for ${memberInfo.get("organization")} on ${memberInfo.get("timestamp")}</p>
<br>
<p>Name: ${memberInfo.get("first_name")} ${memberInfo.get("last_name")}</p>
<p>Email: ${memberInfo.get("email")}</p>
<p>Phone: ${memberInfo.get("mobile_phone")}</p>
<br>
<p>Company: ${memberInfo.get("organization")}</p>
<br>
<span>-Logan Chamber of Commerce</span>
`

// first_name=Automation&last_name=Tester&email=automated.tester%40gmail.com&mobile_phone=14357771234&organization=DOGMA&membership_level=3&organization_title=DOGMA+INCORPORATED&organization_description=&timestamp=09%2F24%2F2025+21%3A32%3A29
// let reciept = {
//     "Name": `${memberInfo.get("first_name")} ${memberInfo.get("last_name")}`,
//     "Email": memberInfo.get("email"),
//     "Mobile Phone": memberInfo.get("mobile_phone"),
//     "Organization Name": memberInfo.get("organization"),
//     "Member Start Date": memberInfo.get("timestamp")
// };

// Object.entries(reciept).forEach(([key, value]) => {
//     console.log(key, value);
// });

// let membership = {
//     "name": "Space Dynamics Laboratory",
//     "address": "info@sdl.usu.edu",
//     "phone": "435-713-3400",
//     "URL": "http://www.sdl.usu.edu",
//     "icon": "https://www.sdl.usu.edu/favicon.ico",
//     "membershipLevel": 3
// }