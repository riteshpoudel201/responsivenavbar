//
//selectors
//

//selecting buttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

const inner = document.querySelector(".inner-buttons");
const innerBtn = document.querySelectorAll(".inner-button");
//selecting image and image containers and body
const slide = document.querySelector(".carousel-slide");
const image = document.querySelectorAll("img");

//getting last and first child from selected images
const lastImage = image[image.length - 1];
const firstImage = image[0];
firstImage.draggable = false;
console.log(firstImage);




//
//variables
//
let count = 0;
let slideIndex = 0,
    i = 0,
    buttonIndex = 0;
const size = image[0].clientWidth;
console.log(size);

automaticSlide();

//
//event handlers
//
nextBtn.addEventListener("click", function (event) {
    nextImage(event)
});

prevBtn.addEventListener("click", function (event) {
    prevImage(event)
});

innerBtn.forEach(current => {

    current.addEventListener("click", function () {
        viewImage(current)
    })
});

document.addEventListener("load", () => {

})

//
//functions
//
function nextImage(e) {
    slide.style.transition = "transform 0.4s ease-in-out";
    if (image[count] === lastImage) {
        count;
        console.log("you are at last position");
    } else {
        count++;
        slide.style.transform = "translate(" + (-size * count) + "px)";
    }
}


function prevImage(e) {
    slide.style.transition = "transform 0.4s ease-in-out";
    if (image[count] === firstImage) {
        count;
        console.log("you are at first position");
    } else {
        count--;
        slide.style.transform = "translate(" + (-size * count) + "px)";
    }
}

function viewImage(current) {
    console.log(current);
    innerBtn.forEach(buttons => {
        if (buttons.dataset.title === current.dataset.title) {
            current.classList.add("active");
        } else {
            buttons.classList.remove("active");
        }
    })


    slide.style.transition = "transform 0.4s ease-in-out";
    slide.style.transform = "translate(" + (-size * current.dataset.title) + "px)";

}

function autoImageSlider() {
    slide.style.transition = "transform 0.4s ease-in-out";
    slide.style.transform = "translate(" + (-size * slideIndex - 1) + "px)";
    if (slideIndex === image.length - 1) {
        slideIndex = -1;
    }

    // if (!innerBtn[slideIndex ].classList.contains("active")){ innerBtn[slideIndex].classList.add("active");}
    // for (i; i < image.length; i++) {
    //     if (slideIndex - i >= 0 && slideIndex + i < image.length) {
    //         if (innerBtn[slideIndex - i].classList.contains("active")) innerBtn[slideIndex - i].classList.remove("active");
    //         if (innerBtn[slideIndex + i].classList.contains("active")) innerBtn[slideIndex + i].classList.remove("active");
    //     }
    // }
    slideIndex++;
}



//not working
function autoActiveMaker() {
    if (buttonIndex < innerBtn.length) console.log(buttonIndex);
    if (!innerBtn[buttonIndex].classList.contains("active")) innerBtn[buttonIndex].classList.add("active");
    else innerBtn[buttonIndex].classList.remove("active");
    if (buttonIndex === innerBtn.length - 1) buttonIndex = -1;
    buttonIndex++;
}


function automaticSlide() {
    setInterval(autoImageSlider, 1000);
    //setInterval(autoActiveMaker, 2000);

}