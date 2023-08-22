var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
	
function inputLength(){
	return input.value.length;
}
// adding delete button on existing elements
function addDelete() {
	var li = document.getElementsByTagName("li");
	for (var i = 0; i < li.length; i++){
		var btn = document.createElement("button");
		btn.appendChild(document.createTextNode("Delete"));
		btn.classList.add("btn-style");
		li[i].appendChild(document.createTextNode("  "));
		li[i].appendChild(btn);
		btn.addEventListener("click" , removeElement);
		toggle();
	}
}

addDelete();

function createListElement(){
	var li = document.createElement("li");
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	btn.classList.add("btn-style");
	li.appendChild(document.createTextNode(input.value + " "));
	ul.appendChild(li);
	li.appendChild(btn);
	btn.addEventListener("click" , removeElement);
	input.value = "";
	toggle();
}

function removeElement() {
	event.target.parentElement.remove(parent);	
}

function toggle(){
	var li = document.getElementsByTagName("li");
	for (var i = 0; i < li.length; i++){
		li[i].addEventListener("click" , line)
	}
}



function line() {
	event.target.classList.toggle("done");

}	

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which === 13) {
		createListElement();
	}
}

button.addEventListener("click" , addListAfterClick);

input.addEventListener("keypress" , addListAfterKeypress);
