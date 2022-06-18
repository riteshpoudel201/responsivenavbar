//selectors
const button = document.querySelector("button");
const body = document.querySelector("body");

//event listeners
button.addEventListener("click", () => redirect );
button.addEventListener("dblclick", function(){ customBodyColor('blue') } );
button.addEventListener("mouseover", function(){ customBodyColor('yellow') } );
button.addEventListener("mouseout", function(){ customBodyColor('white') } );


//functions
function customBodyColor(color){
body.style.background = color;
}

const redirect = () => {
    location.href = "./navbar.html";
}