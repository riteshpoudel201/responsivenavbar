//variables create
var startX ,
    startY,
    moveX ,
    moveY ;

//selectors
const menu = document.querySelector(".mobile-menu");
const icon = document.querySelector(".bi");
const nav = document.querySelector("nav");

//event listeners
menu.addEventListener("click", () => toggleIcon(icon));
//document.addEventListener("scroll", () => hideNav(nav));
document.addEventListener("touchstart",function(event) {touchStart(event)});
document.addEventListener("touchend",function (){ touchEnd()});
document.addEventListener("touchmove",function (event){ touchMove(event)});


//functions used appear here
const toggleIcon = (e) => {
    e.classList.toggle("bi-x-lg");
    nav.classList.toggle("hide");

}
const hideNav = (e) => {
    nav.classList.add("hide");
    icon.classList.remove("bi-x-lg");
}
function touchStart(e) {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
}
function touchMove (e) {
    moveX = e.touches[0].clientX;
    moveY = e.touches[0].clientY;
}

function touchEnd () {
    if(startX + 100 < moveX){
        nav.classList.add("hide");
        icon.classList.remove("bi-x-lg");
        console.log("swiping towards right");
    }
    else if(startX - 100 > moveX){
        nav.classList.remove("hide");
        icon.classList.add("bi-x-lg");
        console.log("swiping towards left");
    }
    if(startY+100 < moveY){
        console.log("swiping towards down");
    }
    else if(startY-100 > moveY){
        console.log("swiping towards up");
    }
}