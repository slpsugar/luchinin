const contactButton = document.querySelector('.contact-button');
const links = document.querySelectorAll('.hidden-links');

function showContacts() {
  contactButton.classList.toggle('changeColour');
  links.forEach(link => {
    link.classList.toggle("hidden-links");
    link.classList.toggle("changeColour");
  });
}

contactButton.addEventListener('click', showContacts);