const btn = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

const cont = document.querySelector(".container1");
const cont2 = document.querySelector(".container2");
const cont3 = document.querySelector(".container3");

btn.addEventListener("click", function () {
    cont.classList.toggle("show-container");
})

btn2.addEventListener("click", function () {
    cont2.classList.toggle("show-container");
})

btn3.addEventListener("click", function () {
    cont3.classList.toggle("show-container");
})