const moreBtn = document.querySelector(".spec");
const menuOnMore = document.querySelector(".menu");
const root = document.querySelector(":root");

moreBtn.addEventListener('click',()=>{
  menuOnMore.classList.toggle("show");

  console.log(menuOnMore.classList.contains("show"));
  menuOnMore.classList.contains("show") ? root.style.setProperty("--plusOrMinus", `"-"`) 
                                        : root.style.setProperty("--plusOrMinus", `"+"`);
})
