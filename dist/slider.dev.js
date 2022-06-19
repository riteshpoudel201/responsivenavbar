"use strict";

//
//selectors
//
//selecting buttons
var prevBtn = document.querySelector("#prevBtn");
var nextBtn = document.querySelector("#nextBtn");
var inner = document.querySelector(".inner-buttons");
var innerBtn = document.querySelectorAll(".inner-button"); //selecting image and image containers and body

var slide = document.querySelector(".carousel-slide");
var image = document.querySelectorAll("img"); //getting last and first child from selected images

var lastImage = image[image.length - 1];
var firstImage = image[0];
firstImage.draggable = false;
console.log(firstImage); //
//variables
//

var count = 0;
var slideIndex = 0,
    i = 0,
    buttonIndex = 0;
var size = image[0].clientWidth;
console.log(size);
automaticSlide(); //
//event handlers
//

nextBtn.addEventListener("click", function (event) {
  nextImage(event);
});
prevBtn.addEventListener("click", function (event) {
  prevImage(event);
});
innerBtn.forEach(function (current) {
  current.addEventListener("click", function () {
    viewImage(current);
  });
});
document.addEventListener("load", function () {}); //
//functions
//

function nextImage(e) {
  slide.style.transition = "transform 0.4s ease-in-out";

  if (image[count] === lastImage) {
    count;
    console.log("you are at last position");
  } else {
    count++;
    slide.style.transform = "translate(" + -size * count + "px)";
  }
}

function prevImage(e) {
  slide.style.transition = "transform 0.4s ease-in-out";

  if (image[count] === firstImage) {
    count;
    console.log("you are at first position");
  } else {
    count--;
    slide.style.transform = "translate(" + -size * count + "px)";
  }
}

function viewImage(current) {
  console.log(current);
  innerBtn.forEach(function (buttons) {
    if (buttons.dataset.title === current.dataset.title) {
      current.classList.add("active");
    } else {
      buttons.classList.remove("active");
    }
  });
  slide.style.transition = "transform 0.4s ease-in-out";
  slide.style.transform = "translate(" + -size * current.dataset.title + "px)";
}

function autoImageSlider() {
  slide.style.transition = "transform 0.4s ease-in-out";
  slide.style.transform = "translate(" + (-size * slideIndex - 1) + "px)";

  if (slideIndex === image.length - 1) {
    slideIndex = -1;
  }

  if (!innerBtn[slideIndex].classList.contains("active")) {
    innerBtn[slideIndex].classList.add("active");
  }

  for (i; i < image.length; i++) {
    if (slideIndex - i >= 0 && slideIndex + i < image.length) {
      if (innerBtn[slideIndex - i].classList.contains("active")) innerBtn[slideIndex - i].classList.remove("active");
      if (innerBtn[slideIndex + i].classList.contains("active")) innerBtn[slideIndex + i].classList.remove("active");
    }
  }

  slideIndex++;
}

function autoActiveMaker() {
  if (buttonIndex < innerBtn.length) console.log(buttonIndex);
  if (!innerBtn[buttonIndex].classList.contains("active")) innerBtn[buttonIndex].classList.add("active");else innerBtn[buttonIndex].classList.remove("active");
  if (buttonIndex === innerBtn.length - 1) buttonIndex = -1;
  buttonIndex++;
}

function automaticSlide() {
  setInterval(autoImageSlider, 1000); //setInterval(autoActiveMaker, 2000);
}