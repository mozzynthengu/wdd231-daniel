import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

// Disclaimer
const disclaimer = document.querySelector(".disclaimer a");
disclaimer.href = parkData.url;
disclaimer.textContent = parkData.fullName;

// Page title
document.title = parkData.fullName;

// Hero image
const heroImg = document.querySelector(".hero-banner img");
heroImg.src = parkData.images[0].url;
heroImg.alt = parkData.images[0].altText;

// Park info
function parkInfoTemplate(info) {
  return `
    <a href="#" class="hero-banner__title">${info.fullName}</a>
    <p class="hero-banner__subtitle">
      <span>${info.designation}</span>
      <span>${info.states}</span>
    </p>
  `;
}

const heroContent = document.querySelector(".hero-banner__content");
heroContent.innerHTML = parkInfoTemplate(parkData);