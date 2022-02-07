let posX = document.querySelector(".posX span");
let posY = document.querySelector(".posY span");
let button = document.querySelector(".button");
let container = document.querySelector(".container");

const showMousePosition = (e) => {
  posX.innerText = e.pageX;
  posY.innerText = e.pageY;
};

window.addEventListener("mousemove", showMousePosition, false);
console.log(window);

container.addEventListener("mouseenter", () => {
  container.classList.add("blue");
});

const removeClass = () => {
  container.classList.remove("blue");
};
container.addEventListener("mouseleave", removeClass, false);

button.addEventListener(
  "click",
  () => {
    button.classList.toggle("active");
    console.log("btn was clicked");
  },
  false
);
