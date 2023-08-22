var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var css = document.querySelector('h3');
var div1 = document.querySelector(".div1");
var div2 = document.querySelector(".div2");
var btn = document.querySelector(".btn");

var gradient = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
body.style.background = gradient;
css.textContent = gradient;
// body.style.background = "linear-gradient(to right, red, blue)"; // syntax


function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

function randCol() {
	var rand = Math.floor(Math.random()*256);
	 return rand;
}

function changeCol() {
	div1.style.backgroundColor = "#" + makeid(2) + makeid(2) + makeid(2);
	div2.style.backgroundColor = "#" + makeid(2) + makeid(2) + makeid(2);
	console.log(div2.style.backgroundColor);
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btn.addEventListener("click", changeCol);


function makeid(length) {
    var result           = '';
    var characters       = 'abcdef0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
