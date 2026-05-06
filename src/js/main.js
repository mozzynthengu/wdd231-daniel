//import { getParkData } from "./parkService.mjs";

//const parkData = getParkData();

// Disclaimer
//const disclaimer = document.querySelector(".disclaimer a");
//disclaimer.href = parkData.url;
//disclaimer.textContent = parkData.fullName;

// Page title
//.document.title = parkData.fullName;

// Hero image
//const heroImg = document.querySelector(".hero-banner img");
//heroImg.src = parkData.images[0].url;
//heroImg.alt = parkData.images[0].altText;

// Park info
//function parkInfoTemplate(info) {
 // return `
   // <a href="#" class="hero-banner__title">${info.fullName}</a>
   // <p class="hero-banner__subtitle">
      //<span>${info.designation}</span>
      //<span>${info.states}</span>
   // </p>
 // `;
//}


//const heroContent = document.querySelector(".hero-banner__content");
//heroContent.innerHTML = parkInfoTemplate(parkData);
import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

function parkInfoTemplate(info) {
  return `
    <a href="#" class="hero-banner__title">${info.fullName}</a>
    <p class="hero-banner__subtitle">
      <span>${info.designation}</span>
      <span>${info.states}</span>
    </p>
  `;
}

function setHeaderInfo(data) {
  const disclaimer = document.querySelector(".disclaimer a");
  disclaimer.href = data.url;
  disclaimer.textContent = data.fullName;

  document.title = data.fullName;

  const heroImg = document.querySelector(".hero-banner img");
  heroImg.src = data.images[0].url;
  heroImg.alt = data.images[0].altText;

  const heroContent = document.querySelector(".hero-banner__content");
  heroContent.innerHTML = parkInfoTemplate(data);
}

// run it
setHeaderInfo(parkData);
function setParkIntro(data) {
  const intro = document.querySelector(".intro");

  intro.innerHTML = `
    <h1>${data.fullName}</h1>
    <p>${data.description}</p>
  `;
}
setParkIntro(parkData);
function mediaCardTemplate(info) {
  return `
    <div class="media-card">
      <a href="${info.link}">
        <img src="${info.image}" alt="${info.name}">
        <h3>${info.name}</h3>
      </a>
      <p>${info.description}</p>
    </div>
  `;
}
const parkInfoLinks = [
  {
    name: "Current Conditions ›",
    link: "conditions.html",
    image: parkData.images[2].url,
    description: "See what conditions to expect in the park before leaving on your trip!"
  },
  {
    name: "Fees and Passes ›",
    link: "fees.html",
    image: parkData.images[3].url,
    description: "Learn about the fees and passes that are available."
  },
  {
    name: "Visitor Centers ›",
    link: "visitor_centers.html",
    image: parkData.images[9].url,
    description: "Learn about the visitor centers in the park."
  }
];
function setParkInfoLinks(data) {
  const info = document.querySelector(".info");

  const html = data.map(mediaCardTemplate);

  info.innerHTML = html.join("");
}
setParkInfoLinks(parkInfoLinks);
