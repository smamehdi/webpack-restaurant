const loadContact = () => {
  const contact = document.querySelector('[data-page="Contact"]');
  const phone = document.createElement('p');
  phone.innerHTML = "Phone: 1-555-555-5555";
  contact.appendChild(phone);
};

export default loadContact;

