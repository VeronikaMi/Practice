const barBtn :HTMLButtonElement = document.querySelector("button");
const navUl :HTMLUListElement = document.querySelector(".left ul");

barBtn.addEventListener('click',():void =>{
  console.log("hello");
  navUl.classList.toggle("show");
})