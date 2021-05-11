const moreBtn = document.querySelector(".spec");
const menuOnMore = document.querySelector(".menu");

// const root = document.querySelector(":root");

const fixedMenu = document.querySelector(".fixedMenu");
const height = fixedMenu.offsetTop;
console.log(height);
window.onscroll = () => fixMenu();

moreBtn.addEventListener('click',()=>{
  menuOnMore.classList.toggle("show");
  moreBtn.querySelector(".vBar").classList.toggle("hide");

  // console.log(moreBtn.querySelector(".vBar").classList.toggle("hide"));

  // menuOnMore.classList.contains("show") ? root.style.setProperty("--plusOrMinus", `"-"`) 
  //                                       : root.style.setProperty("--plusOrMinus", `"+"`);
})

const fixMenu = () => {
  if (window.pageYOffset > height) {
    fixedMenu.classList.add("fixed");
  } else {
    fixedMenu.classList.remove("fixed");
  }
}