let display = document.getElementById("display");

let menu = document.getElementById("menu");

display.addEventListener("click", () => {
console.log("object");
  if(getComputedStyle(menu).display != "none"){
    menu.style.display = "none";
 } 
 else {
    menu.style.display = "flex";
  }
})  
