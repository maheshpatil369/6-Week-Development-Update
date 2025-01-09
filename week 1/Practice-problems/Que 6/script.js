var home = document.querySelector('#home');
var about = document.querySelector('#about');
var contact = document.querySelector('#contact');

var hometext = document.querySelector('#hometext');
var abouttext = document.querySelector('#abouttext');
var contacttext = document.querySelector('#contacttext');

hometext.style.display = "block";
hometext.style.width = "50%";

home.addEventListener("click", function(){
    saartexthatao();
    hometext.style.display = "block";
    hometext.style.width = "50%";
});

about.addEventListener("click", function(){
    saartexthatao();
    abouttext.style.display = "block";
    abouttext.style.width = "50%";
});

contact.addEventListener("click", function(){
    saartexthatao();
    contacttext.style.display = "block";
    contacttext.style.width = "50%";
});

function saartexthatao(){
    hometext.style.display = "none";
    abouttext.style.display = "none";
    contacttext.style.display = "none";
}
