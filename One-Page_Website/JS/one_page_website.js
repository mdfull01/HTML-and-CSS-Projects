function openModal() { //function that finds element id myModal and changes its display from none to block (makes it visible)
    document.getElementById("myModal").style.display = "block";
}

function closeModal() { //function that changes element id myModal display back to none 
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1; //declare slideIndex, set value to 1
showSlides(slideIndex); //call showSlides give it argument = slideIndex current value

function plusSlides(n) { //declare plusSlides incriment slideIndex
    showSlides(slideIndex += n);
}

function currentSlide(n) { //declare currentSlide which gets its value from the current value of slideIndex
    showSlides(slideIndex = n);
}

function showSlides(n) { //declare showSlides
    var i;
    var slides = document.getElementsByClassName("mySlides"); //declare array slides with elements by class name mySlides
    var dots = document.getElementsByClassName("demo"); //declare array dots with elements by class name demo
    var captionText = document.getElementById("caption"); 
    if (n > slides.length) {slideIndex = 1} //if you hit next after the last slide show slide 1
    if (n < 1) {slideIndex = slides.length} //if you hit previous on the first slide show the last slide
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; //hide all but the active slide
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "") //make all but one dot not active
    }
    slides[slideIndex-1].style.display = "block"; //display current slide 
    dots[slideIndex-1].className += " active"; //make current slide dot active class
    captionText.innerHTML = dots[slideIndex-1].alt; //change captionText contents to current slide alt text
}