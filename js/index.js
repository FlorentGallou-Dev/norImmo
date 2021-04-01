let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function slideTotal(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let indics = document.getElementsByClassName("indic");

    // To return to 1st slide if pressing next on last slide
    if (n > slides.length) {
        slideIndex = 1
    }
    // To go to last slide if pressing previous on 1st slide
    if (n < 1) {
        slideIndex = slides.length
    }
    // Hiding all the slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // Show on the indicators which one is active
    for (i = 0; i < indics.length; i++) {
        if (i === slideIndex-1) {
            indics[i].style = "background-color: #505050";
        }
        else {
            indics[i].style = "background-color: rgb(194, 194, 194)";
        }
    }
    // Displaying the current slide
    slides[slideIndex-1].style.display = "block";
} 
