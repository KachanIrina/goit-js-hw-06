"use strict";

const counter = document.querySelector("#counter");
const value = document.querySelector("#value")
const decr = document.querySelector('button[data-action="decrement"]');
const incr = document.querySelector('button[data-action="increment"]');
console.log(counter);
console.log(value);
console.log(decr);
console.log(incr);

let counterValue = 0;

const decrement = () => {
    counterValue -= 1;
    value.textContent = counterValue;
}

const increment = () => {
    counterValue += 1;
    value.textContent = counterValue;
}

decr.addEventListener("click", decrement);
incr.addEventListener("click", increment);