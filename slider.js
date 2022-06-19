//
//selectors
//

//buttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
//image and image containers
const slide = document.querySelector(".carousel-slide");
const image = document.querySelectorAll("img");

//getting last and first child from selected images
const lastImage = image[image.length-1];
const firstImage = image[0];
firstImage.draggable = false;
console.log(firstImage);




//
//variables
//
let count = 0;
const size = image[0].clientWidth;
console.log(size);


//
//event handlers
//
nextBtn.addEventListener("click",function(event) {nextImage(event)});
prevBtn.addEventListener("click",function(event){ prevImage(event)});


//
//functions
//
 function nextImage(e) {
    slide.style.transition = "transform 0.4s ease-in-out";
    if(image[count] === lastImage){
    count;
    console.log("you are at last position");
    }
    else
    {
        count++;
        slide.style.transform = "translate("+ (-size * count) + "px)";
 }
    }
    // else{
    //     count;
    // }
    
    // image[0].style.display = "none";

 function prevImage(e) {
    slide.style.transition = "transform 0.4s ease-in-out";
    if(image[count] === firstImage){
    count;
    console.log("you are at first position");
    }
    else{
    count--;
    slide.style.transform = "translate("+ (-size * count) + "px)";
    }
}


