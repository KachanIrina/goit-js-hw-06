"use strict";

const form = document.querySelector(".login-form");

form.addEventListener("submit", onformSubmit);

function onformSubmit(evt) {
    evt.preventDefault();
 
    const {elements: {email, password}} = evt.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
      }  
      
      console.log(`Email: ${email.value}, Password: ${password.value}`);

  evt.currentTarget.reset();
  }

  