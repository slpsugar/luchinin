const workInfo = Array.from(document.querySelectorAll('.work-info-row'));
const imagePreviews = document.querySelectorAll('.image-block');
const fullImages =  Array.from(document.querySelectorAll('.overlay-pic'));
const responsiveWindow = window.matchMedia("(max-width: 600px)");
const closeOverlay = document.querySelector('.navoverlay');
const imagesInParts = document.querySelectorAll('.parts');

fullImages.forEach(fullImage => 
	fullImage.addEventListener('click', function() {
		fullImage.style.display = 'none';
	})
);

function changeScript (media){
	// десктоп
	if (!media.matches) {
		imagePreviews.forEach(preview => {
			preview.style.opacity = '0';
			preview.style.top = Math.floor(Math.random() * 50) +'rem';
			preview.style.left = Math.floor(Math.random() * 50) + 'rem';
		});
	
		for (let i=0; i<workInfo.length; i++) {
			workInfo[i].addEventListener('mouseenter', () => {
				imagePreviews[i].style.opacity = '1';
			});
			workInfo[i].addEventListener('mouseleave', () => {
				imagePreviews[i].style.opacity = '0.15';
			});
		}

		for (let i=0; i<workInfo.length; i++) {
			workInfo[i].addEventListener('click', () => {
				fullImages[i].style.display = 'flex';
			});
		};
	} else {
		// мобильная
		imagesInParts.forEach(image => {
			image.classList.add('parts');
		});

		for (let i=0; i<workInfo.length; i++) {
			workInfo[i].addEventListener('click', () => {
				fullImages[i].style.display = 'flex';
				fullImages[i].appendChild(closeOverlay);
				closeOverlay.style.display = "flex";
			});
		};

	}
}

changeScript(responsiveWindow);
responsiveWindow.addListener(changeScript); // Attach listener function on state changes