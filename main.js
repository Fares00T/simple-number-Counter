// @ts-nocheck
let myNumber = document.getElementById("number");
let value = 0;

let btnRes = document.getElementById("res");
let btnInc = document.getElementById("inc");
let btnDec = document.getElementById("dec");

btnInc.addEventListener("click", () => {
  value++;
  myNumber.textContent = value;
});

btnDec.addEventListener("click", () => {
  value--;
  myNumber.textContent = value;
});

btnRes.addEventListener("click", () => {
  value = 0;
  myNumber.textContent = value;
});
