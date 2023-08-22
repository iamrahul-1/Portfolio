// const div = document.createElement('div');
// const heading = document.createElement('h1');
// document.body.appendChild(div).appendChild(heading);
// heading.innerHTML = "Rahul Chauhan";
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

window.addEventListener('scroll', function(){
  console.clear();
  console.log('scrollY :' + window.scrollY);
  console.log(sticky);
})