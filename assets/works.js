const aleft = document.querySelector (".aleft");
        
aleft.onclick=function () {
	document.querySelector (".grid").scrollLeft -=1500;
}

const aright = document.querySelector (".aright");

aright.onclick=function () {
	document.querySelector (".grid").scrollLeft +=1500;
}


