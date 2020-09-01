var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randombtn = document.querySelector(".random")

function setGradient(){
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ "," 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";"
}

function getRandomColor() {
  return '#' + Math.random().toString(16).substring(2, 8);
}

function setRandomGradient(){
	color1.value = getRandomColor();
	color2.value = getRandomColor();

	setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randombtn.addEventListener("click", setRandomGradient);

body.onload = function(){
  setGradient();
}
