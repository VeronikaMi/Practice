var barBtn = document.querySelector("button");
var navUl = document.querySelector(".left ul");
barBtn.addEventListener('click', function () {
    console.log("hello");
    navUl.classList.toggle("show");
});
