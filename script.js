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

var imgEmployee = document.getElementsByClassName("img-employee")
var buttonChangeEmployee = document.getElementsByClassName("arrow")

let start = 0
let end = 5

function carouselEmploy(e) {
    // const pageWidth = document.documentElement.scrollWidth

    if(e.target.classList.contains('next')){
        if (imgEmployee[end] == imgEmployee[imgEmployee.length-1]) return
        
        imgEmployee[start].classList.toggle('img-employee-hidden')
        start++
        end++
        imgEmployee[end].classList.toggle('img-employee-hidden')
    }else{
        if (imgEmployee[start] == imgEmployee[0]) return

        imgEmployee[end].classList.toggle('img-employee-hidden')
        start--
        end--
        imgEmployee[start].classList.toggle('img-employee-hidden')
    }
}

for(let button of buttonChangeEmployee) {
    button.addEventListener("click", carouselEmploy);
};