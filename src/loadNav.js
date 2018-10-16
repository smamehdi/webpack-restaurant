import openTab from './openTab';

const loadNav = () => {
  const tabHolder = document.querySelector('.tabs');
  const tabs = ['About', 'Menu', 'Contact'];
  tabs.forEach(tabName => {
  const button = document.createElement('button');
  button.classList.add('tabs__link');
  button.dataset.target = tabName;
  button.addEventListener('click', openTab(tabName));
  button.innerHTML = tabName;
  tabHolder.appendChild(button);
  });
};

export default loadNav;

