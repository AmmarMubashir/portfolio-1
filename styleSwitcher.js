const dayNight = document.querySelector(".dayNight");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");

  document.querySelector("nav").classList.toggle("navShadow");
  const inputs = document.querySelectorAll(".input");

  // Loop through each input element and do something
  inputs.forEach((input) => {
    input.classList.toggle("outline");
  });

  console.log("Clicked!!");
});
