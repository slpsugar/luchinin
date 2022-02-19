const tooltips = document.querySelectorAll('.tooltip');
const workContainers = document.querySelectorAll('.work-picture-container');
const workDescriptions = document.querySelectorAll('.work-description');
const responsiveWindow = window.matchMedia("(max-width: 600px)");

document.addEventListener('mousemove', fn, false);
function fn(e) {
    for (let i=0; i<tooltips.length; i++) {
        tooltips[i].style.left = e.pageX - 50 + 'px';
        tooltips[i].style.top = e.pageY -50 + 'px';
    }
}

const slideIndex = [1,1,1,1];
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

// function changeScript(media) {
//   if (media.matches) {
//     document.body.style.backgroundColor = "yellow";

//     // for (let container of workContainers) {

//     // }
//   } else {
//    document.body.style.backgroundColor = "pink";
//   }
// }


// changeScript(responsiveWindow);
// responsiveWindow.addListener(changeScript); // Attach listener function on state changes
