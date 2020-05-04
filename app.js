// create array and selecting all DOM elements
const hashtag = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// button
const hexBtn = document.querySelector(".hexBtn");
//body
const bodyBgc = document.querySelector("body");
//span
const hex = document.querySelector(".hex");

//tell button how to react
hexBtn.addEventListener("click", getColors);

//creating a function and variable and loop
function getColors() {
  let hexCol = "#";

  for (i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * hashtag.length);
    hexCol += hashtag[random];
  }
  bodyBgc.style.backgroundColor = hexCol;
  hex.innerHTML = hexCol;
}
