const value = document.getElementById("value");
const btns = document.querySelector(".btns");

let count = 0;

btns.addEventListener('click',(e)=>{
  let btn = e.target;

  if(btn.classList.contains('reset')){
    count = 0;
  }
  else if(btn.classList.contains('decrease')){
    count--;
  }
  else{
    count++;
  }
  value.innerText = count;
  
  changeColor();
  
})

const changeColor = ()=>{
  if(count < 0 ){
    value.style.color = "red";
  }
  else if(count > 0){
    value.style.color = "green";
  }
  else{
    value.style.color = "black";
  }
}


