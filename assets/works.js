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

var img002 = document.getElementById("img002");
var row2 = document.getElementById("row-2");

var img003 = document.getElementById("img003");
var row3 = document.getElementById("row-3");

var img004 = document.getElementById("img004");
var row4 = document.getElementById("row-4");

var img005 = document.getElementById("img005");
var row5 = document.getElementById("row-5");

var img006 = document.getElementById("img006");
var row6 = document.getElementById("row-6");

var img007 = document.getElementById("img007");
var row7 = document.getElementById("row-7");

var img008 = document.getElementById("img008");
var row8 = document.getElementById("row-8");

var img009 = document.getElementById("img009");
var row9 = document.getElementById("row-9");

var img010 = document.getElementById("img010");
var row10 = document.getElementById("row-10");

var img011 = document.getElementById("img011");
var row11 = document.getElementById("row-11");

var img012 = document.getElementById("img012");
var row12 = document.getElementById("row-12");





var init = () => {
	img001.style.opacity = '0'; 
	img002.style.opacity = '0';


	row1.addEventListener('mouseover', () => {img001.style.opacity = '1';});
	row1.addEventListener('mouseout', () => {img001.style.opacity = '0.3';});

	row2.addEventListener('mouseover', () => {img002.style.opacity = '1';});
	row2.addEventListener('mouseout', () => {img002.style.opacity = '0.3';});

	row3.addEventListener('mouseover', () => {img003.style.opacity = '1';});
	row3.addEventListener('mouseout', () => {img003.style.opacity = '0.3';});

	row4.addEventListener('mouseover', () => {img004.style.opacity = '1';});
	row4.addEventListener('mouseout', () => {img004.style.opacity = '0.3';});

	row5.addEventListener('mouseover', () => {img005.style.opacity = '1';});
	row5.addEventListener('mouseout', () => {img005.style.opacity = '0.3';});

	row6.addEventListener('mouseover', () => {img006.style.opacity = '1';});
	row6.addEventListener('mouseout', () => {img006.style.opacity = '0.3';});

	row7.addEventListener('mouseover', () => {img007.style.opacity = '1';});
	row7.addEventListener('mouseout', () => {img007.style.opacity = '0.3';});

	row8.addEventListener('mouseover', () => {img008.style.opacity = '1';});
	row8.addEventListener('mouseout', () => {img008.style.opacity = '0.3';});

	row9.addEventListener('mouseover', () => {img009.style.opacity = '1';});
	row9.addEventListener('mouseout', () => {img009.style.opacity = '0.3';});

	row10.addEventListener('mouseover', () => {img010.style.opacity = '1';});
	row10.addEventListener('mouseout', () => {img010.style.opacity = '0.3';});

	row11.addEventListener('mouseover', () => {img011.style.opacity = '1';});
	row11.addEventListener('mouseout', () => {img011.style.opacity = '0.3';});

	row12.addEventListener('mouseover', () => {img012.style.opacity = '1';});
	row12.addEventListener('mouseout', () => {img012.style.opacity = '0.3';});


};
init();
