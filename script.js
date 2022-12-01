var buttonSlide = document.getElementsByClassName('button-slide')
var textSlide = document.getElementsByClassName("text")
var imageSlide = document.getElementsByClassName("image-slide")

var currentSlide = 0

function changeClassSlide(curr) {
    buttonSlide[curr].classList.toggle("button-active")
    textSlide[curr].classList.toggle("text-active")
    imageSlide[curr].classList.toggle("image-active")
}

function changingSlide(){
    let current = currentSlide %6
    let next = (current + 1) %6

    changeClassSlide(current)
    changeClassSlide(next)

    currentSlide = next
}

var timerChange = setInterval(changingSlide, 5000);

function changeSlideForButton(e) {
    clearInterval(timerChange)

    changeClassSlide(currentSlide)

    currentSlide = e.target.textContent -1

    changeClassSlide(currentSlide)

    timerChange = setInterval(changingSlide, 5000);
}

for(let button of buttonSlide) {
    button.addEventListener("click", changeSlideForButton);
};
