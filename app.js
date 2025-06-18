let button = document.querySelector("#btn");
let light = document.querySelector(".light");
let light2 = document.querySelector(".light2");

button.addEventListener("click", () => {
  button.classList.toggle("active");
  light.classList.toggle("on");
  light2.classList.toggle("on");
});
