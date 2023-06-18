"use strict";

//filtro de opacidad del video
const videoContenedor = document.querySelector("#video-container");
const filtro = document.createElement("div");
filtro.classList.add("overlay");
videoContenedor.appendChild(filtro);

//Efecto sobre cursor

document.addEventListener("mousemove", function (e) {
  const streak = document.querySelector(".comet");
  streak.style.left = e.clientX + "px";
  streak.style.top = e.clientY + "px";
});

//Menu

const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const nav = document.querySelector("#nav");
const seccion = document.querySelector("#seccion");
const mediaQuery = window.matchMedia("(max-width: 480px)");

abrir.addEventListener("click", () => {
  nav.classList.add("nav-visible");
  abrir.classList.add("ocultar");
  if (mediaQuery.matches) {
    seccion.classList.add("ocultar");
  }
});

cerrar.addEventListener("click", () => {
  nav.classList.remove("nav-visible");
  abrir.classList.remove("ocultar");
  seccion.classList.remove("ocultar");
});
