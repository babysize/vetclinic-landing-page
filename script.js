var buttonSlide = document.getElementsByClassName('button-slide')
var textSlide = document.getElementsByClassName("text")
var imageSlide = document.getElementsByClassName("image-slide")

var currentSlide = 0

function changingSlide(){
    let current = currentSlide %6
    let next = (current + 1) %6

    buttonSlide[current].classList.toggle("button-active")
    buttonSlide[next].classList.toggle("button-active")
    textSlide[current].classList.toggle("text-active")
    textSlide[next].classList.toggle("text-active")
    imageSlide[current].classList.toggle("image-active")
    imageSlide[next].classList.toggle("image-active")

    currentSlide = next
}

setInterval(changingSlide, 2000);

// for(let button of buttonSlide) {
//     button.addEventListener('click', changeSlide);
// };
