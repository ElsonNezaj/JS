
document.getElementById("scrollBtn").addEventListener("click", () => {
  document.querySelector(".values").scrollIntoView({ behavior: "smooth" });
});


const form = document.getElementById("careerForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for applying! We will contact you soon.");
  form.reset();
});
