const previousBtn = document.querySelector("[data-prev-btn]")
const nextBtn = document.querySelector("[data-next-btn]")
const sliderContainer = document.querySelector("[data-slides-container]")

let currentSlide = 0

let maxSlides = document.querySelectorAll(".slide").length - 1

let isClicked = false

let intervalId = null

previousBtn.addEventListener("click", function () {
  prevHandler()
})

nextBtn.addEventListener("click", function () {
  nextHandler()
})

function nextHandler() {
  clearInterval(intervalId)
  if (currentSlide === maxSlides) {
    currentSlide = 0
  } else {
    currentSlide += 1
  }

  sliderContainer.style.transform = `translateX(${currentSlide * -100}%)`

  intervalHandler()
}

function prevHandler() {
  clearInterval(intervalId)

  if (currentSlide === 0) {
    currentSlide = maxSlides
  } else {
    currentSlide -= 1
  }
  sliderContainer.style.transform = `translateX(${currentSlide * -100}%)`

  intervalHandler()
}

function intervalHandler() {
  intervalId = setInterval(function () {
    nextHandler()
  }, 2000)
}

intervalHandler()
