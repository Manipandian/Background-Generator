(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random")
css.textContent = "linear-gradient(to right, #00ff00 , #ff0000)";


//Covert color type

const convertColorType = (color) => {
    let rgbColor = "rgb(";
    if (color.startsWith("#")) {
		// To get rgb from hex color
      rgbColor =
        rgbColor +
        parseInt(color.substr(1, 2), 16) +
        "," +
        parseInt(color.substr(3, 2), 16) +
        "," +
        parseInt(color.substr(5, 2), 16) +
        ")";
      return rgbColor;
    } else if (color.startsWith("rgb")) {
		//To get Hex from rgba
      let colorArray =
        color.indexOf("rgba(") !== -1
          ? color.replace("rgba(", "")
          : color.replace("rgb(", "");
      colorArray = colorArray.replace(")", "");
      colorArray = colorArray.split(",", 3);
      let hexColor = "#";
      colorArray.forEach((element) => {
        let hexValue = parseInt(element).toString(16);
        hexValue = hexValue.length === 1 ? "0" + hexValue : hexValue;
        hexColor = hexColor + hexValue;
      });
      return hexColor;
    }
  };


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
	let randomColor1 = "rgb(" + (Math.random() * 255) + ","
	+ (Math.random() * 255) + ","
	+ (Math.random() * 255) 
	+")";
	let randomColor2 = "rgb(" + (Math.random() * 255)  + ","
	+ (Math.random() * 255) +","
	+ (Math.random() * 255) +")";
	color1.value = convertColorType(randomColor1);
	color2.value = convertColorType(randomColor2);
	body.style.background = "linear-gradient(to right, " + 
	randomColor1 + "," + randomColor2 +")";
	css.textContent = body.style.background + ";";
})


},{}]},{},[1]);
