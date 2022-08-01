const worksButton = document.querySelector(".main");
const artwork = document.querySelector("#artwork");
const exhibitions = document.querySelector("#exhibitions");
const options = document.querySelector(".options");

function showOptions () {
  options.classList.toggle("visible");
}

worksButton.addEventListener("click", showOptions)

// responsible
const contactButton = document.querySelector('.contact-button');
const links = document.querySelectorAll('.hidden-links');
const mobileOptions = document.querySelectorAll('.menu-options');

function showContacts() {
  mobileOptions.forEach(option => option.classList.toggle('darkened'));
  links.forEach(link => {
    link.classList.toggle("hidden-links");
    link.classList.toggle("changeColour");
  });
}

contactButton.addEventListener('click', showContacts);

