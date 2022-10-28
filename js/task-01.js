"use strict";

const categories = document.querySelector("#categories");
 console.log(categories);

const categoriesAll = document.querySelectorAll(".item");
 console.log("Number of categories:", categoriesAll.length);

// for(let i = 0; i < categoriesAll.length; i += 1) {
//    const li = document.querySelector("li");
//    console.log(li);

//    const text = document.querySelector("h2");
//    console.log(text.textContent);
//    console.log(li.length);
// }
categoriesAll.forEach(item => {
    console.log("Category:", item.firstElementChild.textContent);
    console.log("Elements:", item.lastElementChild.children.length)
})
