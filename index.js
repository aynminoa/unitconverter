/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn");
const resetBtn = document.getElementById("reset-btn");
let inputEl = document.getElementById("input");
let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");

convertBtn.addEventListener("click", function () {
  let inputValue = inputEl.value;
  let toFeet = inputValue * 3.281;
  let toMeters = inputValue / 3.281;
  let toGallons = inputValue * 0.264;
  let toLiters = inputValue / 0.264;
  let toPounds = inputValue * 2.204;
  let toKilos = inputValue / 2.204;

  lengthEl.textContent = `${inputValue} meters = ${toFeet.toFixed(
    3
  )} feet | ${inputValue} feet = ${toMeters.toFixed(3)} meters`;

  volumeEl.textContent = `${inputValue} liters = ${toGallons.toFixed(
    3
  )} gallons | ${inputValue} gallons = ${toLiters.toFixed(3)} liters`;

  massEl.textContent = `${inputValue} kilos = ${toPounds.toFixed(
    3
  )} pounds | ${inputValue} pounds = ${toKilos.toFixed(3)} kilos`;
});

resetBtn.addEventListener("click", function () {
  inputEl.value = " ";
  lengthEl.textContent = `0 meters = 0.000 feet | 0 feet = 0.000 meters`;
  volumeEl.textContent = `0 liters = 0.000 gallons | 0 gallons = 0.000 liters`;
  massEl.textContent = `0 kilos = 0.000 pounds | 0 pounds = 0.000 kilos`;
});
