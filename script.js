"use strict";
import { categorypage } from "./category.js";
//
// import "home.js";
import { homepage } from "./home.js";

let play;
function start() {
  homepage();
  play = document.querySelector("#play");
  play.addEventListener("click", playgame);
}

start();

let root = document.getElementById("root");

let menu_container = document.querySelector(".menu-container");
let menu_btn = document.querySelector(".home--control--menu");
let menu_close_btn = document.querySelector(".menu--close");
//
// Menu
//

// Open Menu
//
menu_btn.addEventListener("click", () => {
  menu_container.classList.add("active");
});

// Close Menu
//
menu_close_btn.addEventListener("click", () => {
  menu_container.classList.remove("active");
});

//
// Home Page
//

function playgame() {
  categorypage();
  let dev = document.querySelectorAll(".categories--1");
  dev.forEach((e) => {
    e.addEventListener("click", () => {
      alert("Coming Soon, Please wait...☺");
    });
  });
}
