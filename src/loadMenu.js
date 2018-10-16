const loadMenu = () => {
  const menu = document.querySelector('[data-page="Menu"]');
  const foodList = document.createElement('ul')
  foodList.classList.add('foodlist');
  const foods = [
    'Chicken',
    'Beef',
    'Other Meat',
    'Fries'
  ];
  foods.forEach(food => {
    const item = document.createElement('li');
    item.innerHTML = food;
    foodList.appendChild(item);
  });
  menu.appendChild(foodList);
};

export default loadMenu;

