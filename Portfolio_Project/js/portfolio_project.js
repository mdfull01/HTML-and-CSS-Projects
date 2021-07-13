//these functions open and close the contact form 
function openForm() {
    document.getElementById('myForm').style.display = 'block';
}

function closeForm() {
    document.getElementById('myForm').style.display = 'none';
}

//this function displays the first image in the slideshow when the page loads
var slideIndex = 1;
showSlides(slideIndex);

//this function changes the slide when the left of right arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//this function changes the slide when the dots are clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName('mySlides'); //takes all elements in class mySlides and stores them in variable array 'slides'
    var dots = document.getElementsByClassName('dot'); //takes all elements in class dot and stores them in variable array 'dots'
    if (n > slides.length) {slideIndex = 1}; //if n is greater than the length of the array slides the slideIndex is set to 1
    if (n < 1) {slideIndex = slides.length}; //if n is less than one set slideIndex to slides.length (show the final slide)
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'; //for loop that takes each item in teh array slides and sets its display to none
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', ''); //for loop that takes each item in the array dots and removes the active class (and therefore styling)
    }
    slides[slideIndex - 1].style.display = 'block'; //displays the image in the slideshow (current slide)
    dots[slideIndex - 1].className += ' active'; //adds the active styling to the dot associated with the image (current slide)   
}