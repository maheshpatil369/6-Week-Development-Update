var inp1 = document.querySelector("#inp1");
var inp2 = document.querySelector("#inp2");
var form = document.querySelector("form");
var h3 = document.querySelector("h3");

form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    if (inp1.value === '' || inp2.value === '') {
        h3.textContent = "Error: Some fields are blank";
        h3.style.color = "red";
    }
    else {
        h3.textContent = "";
        h3.style.color = "black";
    }
});
