const favColors = ["darksalmon","rgb(75, 5, 5)","#165a3a","rgb(15, 214, 188)","#9231a8","hotpink","#f2743a"];
const hexConstractor = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const allBtn = document.querySelector(".all");
const hexBtn = document.querySelector(".hex");
const color = document.getElementById("value")

allBtn.addEventListener('click',()=>{
  let randomNumber = Math.floor(Math.random() * favColors.length);
  document.body.style.backgroundColor = favColors[randomNumber];
  color.textContent = favColors[randomNumber];
})

hexBtn.addEventListener('click',()=>{
  let hexColor = "#";
  for(let i=0; i<6;i++){
    let randomNumber = Math.floor(Math.random() * hexConstractor.length);
    hexColor += hexConstractor[randomNumber];
  }
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
})