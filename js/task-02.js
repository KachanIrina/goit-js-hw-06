"use strict";

const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
  ];

 const ingredientsUl = document.querySelector("#ingredients");
console.log(ingredientsUl);

const arr = []

ingredients.forEach(ingredient => {
  const newItem = document.createElement("li");
  newItem.textContent = ingredient;
  newItem.classList.add("item");
  arr.push(newItem);
})

ingredientsUl.append(...arr);
console.log(ingredientsUl);