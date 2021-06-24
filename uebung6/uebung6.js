const images = document.querySelectorAll('#slideshow > li');
var dots = document.getElementsByClassName("dot");

let i = 0;

const changeImage = function() {
    images[i].classList.remove('visible');
    dots[i].classList.remove('active');

    if (i < 2) {
        i = i + 1;   
    }else{
        i = 0;
    }

    images[i].classList.add('visible');
    dots[i].classList.add('active');




}
    
setInterval(changeImage,4000);






/*function changeSlide() {



    setInterval(function(){ 
       slide1.style.opacity = "0";
       slidesHidden.style.opacity = "1";

    }, 3000);
  }

changeSlide();


let slide1 = document.querySelector("#slideshow.visible");
let slidesHidden = document.querySelectorAll("#slideshow.hidden");









//pause
slideShowImages[0].style.opacity = "0";
slideShowImages[1].style.opacity = "1";

//pause
slideShowImages[1].style.opacity = "0";
slideShowImages[2].style.opacity = "1";

//pause
slideShowImages[2].style.opacity = "0";
slideShowImages[0].style.opacity = "1";

let slideShowImages = document.querySelectorAll("#slideshow");

for (var i = 0; i < slideShowImages.length; i++) {

    console.log(i);
    setInterval(function() {
        if (i === slideShowImages.length - 1) {
            slideShowImages[i].style.opacity = "0";
            slideShowImages[0].style.opacity = "1";
        } else {
            slideShowImages[i].style.opacity = "0";
            slideShowImages[i+1].style.opacity = "1";
        }},3000)
    
}

setInterval(changeSlides(),3000);

counter = 0;
function changeSlides() {

    if (i === slideShowImages.length - 1) {
        slideShowImages[i].style.opacity = "0";
        slideShowImages[0].style.opacity = "1";
    } else {
        slideShowImages[i].style.opacity = "0";
        slideShowImages[i+1].style.opacity = "1";
    }
}*/



/*if (slideShowImages[1].style.opacity = "1") {
    setInterval(function(){
        slideShowImages[1].style.opacity = "0";
        slideShowImages[2].style.opacity = "1";
    }, 3000);
} else {}*/



