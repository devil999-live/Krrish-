const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

// ---- NEXT BUTTON ----
nextBtn.addEventListener("click", () => {
  const items = document.querySelectorAll(".item");
  slider.append(items[0]);   // First → Last
});

// ---- PREVIOUS BUTTON ----
prevBtn.addEventListener("click", () => {
  const items = document.querySelectorAll(".item");
  slider.prepend(items[items.length - 1]);  // Last → First
});

// ---- AUTO-SLIDE EVERY 3 SECONDS ----
setInterval(() => {
  const items = document.querySelectorAll(".item");
  slider.append(items[0]);
}, 4500);

enterBtn.addEventListener("click", () => {
  intro.style.display = "none";
  mainContent.style.display = "block";
  music.play();

  // Show HAPPY BIRTHDAY text
  const hbText = document.getElementById("happyBirthdayText");
  hbText.style.display = "block";
});
