"use strict"

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

  const btn = document.querySelector(".change-color");
  const body = document.querySelector("body");
  const color = document.querySelector(".color")
  console.log(body)

   btn.addEventListener("click", onBtnChangeBgdColor);

  function onBtnChangeBgdColor() {
    
    const bodyColor = getRandomHexColor()
    body.style.backgroundColor = bodyColor;
    color.textContent = bodyColor;
  }