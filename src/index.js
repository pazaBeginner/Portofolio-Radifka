import '@fortawesome/fontawesome-free/css/all.min.css';
import css from './css/style.css';
import './js/script.js';
import { renderSertificate } from './js/sertificate/render.js';
import { renderBlogs } from './js/blog/render.js';
import { renderTech } from './js/tech/render.js';

document.addEventListener('DOMContentLoaded', () => {
    renderSertificate();
    renderBlogs();
    renderTech();

    const date = new Date().getFullYear();
    document.querySelector('footer .content-footer span').innerText = date;
});

/*
const links = document.querySelectorAll(".link-hover");
const hoverCard = document.getElementById("hoverCard");
const cardTitle = document.getElementById("cardTitle");
const cardDesc = document.getElementById("cardDesc");
const cardImage = document.getElementById("cardImage");

links.forEach(link => {
  link.addEventListener("mouseover", (e) => {
    cardTitle.textContent = link.getAttribute("data-title");
    cardDesc.textContent = link.getAttribute("data-desc");
    cardImage.src = link.getAttribute("data-img");

    hoverCard.style.left = `${e.pageX}px`;
    hoverCard.style.top = `${e.pageY + 10}px`;
    hoverCard.classList.remove("hidden");
  });

  link.addEventListener("mouseout", () => {
    hoverCard.classList.add("hidden");
  });
});
*/