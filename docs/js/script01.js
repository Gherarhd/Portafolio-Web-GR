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

// const link = document.querySelector("#linkProyecto");

// link.addEventListener("click", () => {
//   click();
// });

// function click() {
//   console.log("funciona");
// }
///Jquery----------------
$(document).ready(function () {
  $(function () {
    $("#progressbar").progressbar({
      value: 95,
    });
  });
  $(function () {
    $("#progressbar2").progressbar({
      value: 90,
    });
  });
  $(function () {
    $("#progressbar3").progressbar({
      value: 70,
    });
  });
  $(function () {
    $("#progressbar4").progressbar({
      value: 80,
    });
  });
  $(function () {
    $("#progressbar5").progressbar({
      value: 70,
    });
  });
  $(function () {
    $("#progressbar6").progressbar({
      value: 78,
    });
  });
  $(function () {
    $("#progressbar7").progressbar({
      value: 76,
    });
  });
  $(function () {
    $("#progressbar8").progressbar({
      value: 59,
    });
  });
  $(function () {
    $("#progressbar9").progressbar({
      value: 82,
    });
  });
  $(function () {
    $("#progressbar10").progressbar({
      value: 91,
    });
  });
  $(function () {
    $("#progressbar11").progressbar({
      value: 87,
    });
  });
  $(function () {
    $("#progressbar12").progressbar({
      value: 40,
    });
  });
  $(function () {
    $("#progressbar13").progressbar({
      value: 40,
    });
  });

  //slider---------------

  /*----Slider---- */

  $(".galeria").bxSlider({
    mode: "fade",
    captions: true,
    slideWidth: 1000,
    responsive: true,
  });
});
