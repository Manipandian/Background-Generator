var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random")
css.textContent = "linear-gradient(to right, #00ff00 , #ff0000)";

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", function() {
	body.style.background = "linear-gradient(to right, " + 
	"rgb(" + (Math.random() * 255) + ","
	+ (Math.random() * 255) + ","
	+ (Math.random() * 255) 
	+")," + "rgb(" + (Math.random() * 255)  + ","
	+ (Math.random() * 255) +","
	+ (Math.random() * 255) +"))";
	css.textContent = body.style.background + ";";
})

