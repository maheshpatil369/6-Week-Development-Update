var add = document.querySelector("#add");
var remove = document.querySelector("#remove");
var inp = document.querySelector("input");
var ul = document.querySelector("ul");

add.addEventListener("click", function () {
    if (inp.value.trim() === '') {
        alert("Please enter a value!"); 
    } else {
        var li = document.createElement("li"); 
        li.textContent = inp.value; 
        ul.appendChild(li); 
        inp.value = ""; 
    }
});

remove.addEventListener("click", function () {
    if (ul.lastElementChild) {
        ul.removeChild(ul.lastElementChild);
    } else {
        alert("No items to remove!");
    }
});
