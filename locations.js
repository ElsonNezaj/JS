const names = document.querySelectorAll(".location-slider h2");
const descriptions = document.querySelectorAll(".location-slider h4");
const slideDiv = document.getElementById("slide");
let slideIndex = 0;
let intervalId = null;

const images = [
    "./assets/images/windFarmArizona.jpg",
    "./assets/images/solarFarmArkansas.jpg",
    "./assets/images/solarFarmColorado.jpg",
    "./assets/images/hydropower.jpeg",
    "./assets/images/winsconsonWindFarm.jpg",
];

document.addEventListener("DOMContentLoaded", initializeSlider);

slideDiv.addEventListener("click", () => {
    window.location.href = "#locations";
});

if (!slideDiv) {
    console.log("no slide div");
} else {
    console.log("yes slide div");
}

function initializeSlider() {
    if (images.length > 0) {
        slideDiv.style.backgroundImage = `url(${images[slideIndex]})`;
        slideDiv.style.backgroundSize = "cover";
        slideDiv.style.backgroundPosition = "center";
        slideDiv.style.backgroundRepeat = "no-repeat";
        names[slideIndex].classList.add("show");
        descriptions[slideIndex].classList.add("show");
        intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index) {
    if (index >= images.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = images.length - 1;
    }

    slideDiv.style.backgroundImage = `url(${images[slideIndex]})`;
    names.forEach((name) => {
        name.classList.remove("show");
    });
    descriptions.forEach((description) => {
        description.classList.remove("show");
    });

    names[slideIndex].classList.add("show");
    descriptions[slideIndex].classList.add("show");
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function stopTimer() {
    clearInterval(intervalId);
}

const dateInput = document.getElementById("date-picker");
const today = new Date();

const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, "0");
const dd = String(today.getDate() + 1).padStart(2, "0");

const formattedDate = `${yyyy}-${mm}-${dd}`;
dateInput.min = formattedDate;

function clearForm() {
    const nameInput = document.getElementById("name-input");
    const emailInput = document.getElementById("email-input");
    const messageInput = document.getElementById("message");
    const appointmentType = document.getElementById("appointment-type");
    const locationSelect = document.getElementById("location");

    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
    appointmentType.value = "a";
    locationSelect.value = "a";
    dateInput.value = formattedDate;
}
