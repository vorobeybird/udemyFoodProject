"use strict";
// ES6 Modules import / Typescript import
import 'nodelist-foreach-polyfill';

import tabs from "./modules/tabs";
import modalWindow from "./modules/modalWindow";
import timer from "./modules/timer";
import cards from "./modules/cards";
import slider from "./modules/slider";
import calculator from "./modules/calculator";
import forms from "./modules/forms";
import { openModal } from "./modules/modalWindow";

window.addEventListener("DOMContentLoaded", () => {
  const modalTimerId = setTimeout(
    () => openModal(".modal", modalTimerId),
    3000
  ); //запускаем открытие модального окна через *** секунд
  tabs(
    ".tabheader__item",
    ".tabcontent",
    ".tabheader__items",
    "tabheader__item_active"
  );
  modalWindow("[data-modal]", ".modal", modalTimerId);
  calculator();
  timer(".timer", "2021-08-03");
  cards();
  slider({
    container: ".offer__slider",
    nextArrow: ".offer__slider-next",
    prevArrow: ".offer__slider-prev",
    totalCounter: "total",
    currentCounter: "current",
    wrapper: ".offer__slider-wrapper",
    field: ".offer__slider-inner",
    slide: ".offer__slide",
  });
  forms("form", modalTimerId);
});
