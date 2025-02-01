let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}

// change home text


// document.addEventListener("DOMContentLoaded", function () {
// });

  let type = new TypeIt(".multiple-text", {
    strings: ["Physical Fitness","Weight Gain","Strength Training","Weight Loss","Bodybuilding"],
    speed: 60,
    deleteSpeed: 60,
    nextStringDelay: 1000,
    cursor: true,
    breakLines: false,
    loop: true,
  });

  type.go();
