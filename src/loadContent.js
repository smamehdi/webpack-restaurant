import loadAbout from './loadAbout.js';
import loadContact from './loadContact.js';
import loadMenu from './loadMenu.js';
import loadNav from './loadNav.js';

const loadContent = () => {
  const content = document.getElementById('content');
  const header = document.createElement('div');
  header.classList.add('header');

  const mainTitle = document.createElement('h1');
  mainTitle.innerHTML = "A Pretty Good Restaurant";

  const tagline = document.createElement('p');
  tagline.classList.add('tagline');
  tagline.innerHTML = "We've got food.";
  header.appendChild(mainTitle);
  header.appendChild(tagline);
  content.prepend(header);
  
  loadNav();
  loadAbout();
  loadMenu();
  loadContact();
}

export default loadContent;

