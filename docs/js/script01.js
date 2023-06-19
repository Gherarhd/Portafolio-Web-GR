"use strict";

//variables
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const nav = document.querySelector("#nav");
const seccion = document.querySelector("#seccion");
const mediaQuery = window.matchMedia("(max-width: 480px)");

//Menu

abrir.addEventListener("click", () => {
  nav.classList.add("nav-visible");
  abrir.classList.add("ocultar");
  // if (mediaQuery.matches) {
  //   seccion.classList.add("ocultar");
  // }
});

cerrar.addEventListener("click", () => {
  nav.classList.remove("nav-visible");
  abrir.classList.remove("ocultar");
  // seccion.classList.remove("ocultar");
});
