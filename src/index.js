import loadContent from './loadContent.js';

loadContent();

const about = document.querySelector('[data-page="About"]');
about.style.display = "block";
const aboutButton = document.querySelector('[data-target="About"]');
aboutButton.classList.add('active');
