let year : HTMLElement | null;
year  = document.getElementById("year")!;
const currentYear : number = new Date().getFullYear();
year.textContent = currentYear.toString();
