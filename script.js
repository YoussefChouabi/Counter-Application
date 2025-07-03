const counter = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetmentButton = document.getElementById("reset");
let count = 0;

function updateCounter() {
  counter.textContent = count;
}
function increment() {
  count++;
  updateCounter();
}
function decrement() {
  count--;
  updateCounter();
}
function reset() {
  count = 0;
  updateCounter();
}   

incrementButton.addEventListener("click", increment);
decrementButton.addEventListener("click", decrement);   
resetmentButton.addEventListener("click", reset);

