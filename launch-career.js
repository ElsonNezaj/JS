
const counters = document.querySelectorAll(".stat-box h3");

counters.forEach(counter => {
  const update = () => {
    const target = +counter.dataset.target;
    const current = +counter.innerText;
    const increment = target / 60;

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(update, 30);
    } else {
      counter.innerText = target;
    }
  };
  update();
});


document.getElementById("ctaBtn").addEventListener("click", () => {
  alert("Open positions page coming soon!");
});
