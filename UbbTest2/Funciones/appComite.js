let slideIndex = 0;

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("carousel-item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "flex";
  setTimeout(showSlides, 8000); // Cambia la imagen cada 4 segundos
}

function plusSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel-item");
  slideIndex += n;
  if (slideIndex > slides.length) {slideIndex = 1}
  if (slideIndex < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "flex";
}

document.addEventListener("DOMContentLoaded", function() {
  showSlides();
});
