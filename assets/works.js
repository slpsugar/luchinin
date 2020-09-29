// const aleft = document.querySelector (".aleft");
        
// aleft.onclick=function () {
// 	document.querySelector (".grid").scrollLeft -=1500;
// }

// const aright = document.querySelector (".aright");

// aright.onclick=function () {
// 	document.querySelector (".grid").scrollLeft +=1500;
// }


var img001 = document.getElementById("img001");
var row1 = document.getElementById("row-1");
var init = () => {
	img001.style.opacity = '0'; //hide by default when page is shown

	row1.addEventListener('mouseover', () => {
	img001.style.opacity = '1';
	});

	row1.addEventListener('mouseout', () => {
	img001.style.opacity = '0.5';
	});
};
init();


var img002 = document.getElementById("img002");
var row2 = document.getElementById("row-2");
var init = () => {
	img002.style.opacity = '0'; //hide by default when page is shown

	row2.addEventListener('mouseover', () => {
	img002.style.opacity = '1';
	});

	row2.addEventListener('mouseout', () => {
	img002.style.opacity = '0.5';
	});
};
init();

