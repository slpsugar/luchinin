const previousImage = document.querySelector('.work-left-arrow');
const nextImage = document.querySelectorAll('.work-right-arrow');

const tooltips = document.querySelectorAll('.tooltip');
// previousImage.addEventListener('click', plusSlides(-1));
// nextImage.addEventListener('click', plusSlides(1));

const slideIndex = [1,1,1, 1];
const collection = ["sport", "model", "gift", "longart"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  const imageCollection = document.getElementsByClassName(collection[no]);
  if (n > imageCollection.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = imageCollection.length}
  for (let i = 0; i < imageCollection.length; i++) {
    imageCollection[i].style.display = "none";  
  }
  imageCollection[slideIndex[no]-1].style.display = "block";  
}

// tooltip


previousImage.addEventListener('mouseover', interval)

function interval() {
  while (true) {
      setInterval(showImage, 1);
  }
}

function showImage() {

  var x = clientX;
  var y = clientY;
  tooltips.style.left = x;
  tooltips.style.top = y;
}
