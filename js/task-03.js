"use strict";

const images = [
    {
      url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

  const gallery = document.querySelector(".gallery");
  console.log(gallery);

  const markup = images
  .map(image => `<li><img src=${image.url} alt="${image.alt}"
  width = "400" height = "250"></img>
  </li>`)
  .join("");

  gallery.insertAdjacentHTML("beforeend", markup);
  gallery.style.display = `flex`; 
  gallery.style.listStyle = `none`;
  gallery.style.flexWrap = 'column-reverse'; 
  gallery.style.gap = `20px`;
  gallery.style.alignItems = `center`;   

  console.log(gallery);