const slides = document.querySelectorAll(".slides img");
const names = document.querySelectorAll(".location-slider h2");
const descriptions = document.querySelectorAll(".location-slider h4");
let slideIndex = 0;
let intervalId = null;


document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(slides.length>0){
        slides[slideIndex].classList.add("show");
        names[slideIndex].classList.add("show");
        descriptions[slideIndex].classList.add("show");
        intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    }else if (index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("show");
    });
    names.forEach(name => {
        name.classList.remove("show");
    });
    descriptions.forEach(description => {
        description.classList.remove("show");
    })

    slides[slideIndex].classList.add("show");
    names[slideIndex].classList.add("show");
    descriptions[slideIndex].classList.add("show");
}

function prevSlide(){
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}

function stopTimer(){
    clearInterval(intervalId);
}

const dateInput = document.getElementById("date-picker");
const today = new Date();

const yyyy = today.getFullYear();
const mm = String(today.getMonth()+1).padStart(2, '0');
const dd = String(today.getDate()+1).padStart(2, '0');

const formattedDate = `${yyyy}-${mm}-${dd}`;
dateInput.min = formattedDate;

function clearForm(){
    const nameInput = document.getElementById("name-input");
    const emailInput = document.getElementById("email-input");
    const messageInput = document.getElementById("message");
    const appointmentType = document.getElementById("appointment-type");
    const locationSelect = document.getElementById("location");

    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
    appointmentType.value = 'a';
    locationSelect.value = 'a';
    dateInput.value = formattedDate;
}
