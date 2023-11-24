"use strict";
let year;
year = document.getElementById("year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear.toString();
