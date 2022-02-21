const workInfo = Array.from(document.querySelectorAll('.work-info-row'));

const imagePreviews = document.querySelectorAll('.image-block');
imagePreviews.forEach(preview => {
	preview.style.opacity = '0';
	preview.style.top = Math.floor(Math.random() * 50) +'rem';
	preview.style.left = Math.floor(Math.random() * 50) + 'rem';
});

const fullImages =  Array.from(document.querySelectorAll('.overlay-pic'));
fullImages.forEach(fullImage => 
	fullImage.addEventListener('click', function() {
		fullImage.style.display = 'none';
	})
);

for (let i=0; i<workInfo.length; i++) {
	workInfo[i].addEventListener('mouseenter', () => {
		imagePreviews[i].style.opacity = '1';
	});
	workInfo[i].addEventListener('mouseleave', () => {
		imagePreviews[i].style.opacity = '0.15';
	});
	workInfo[i].addEventListener('click', () => {
		fullImages[i].style.display = 'flex';
	});
}
