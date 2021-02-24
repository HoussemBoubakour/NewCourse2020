// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*
const x = 23;

if (x === 23) console.log(25);
console.log(1994);


const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== "number") continue;
    if (temps[i] > max) {
      max = temps[i];
    }
    if (temps[i] < min) {
      min = temps[i];
    }
  }
  const tempAmplitude = max - min;

  console.log(tempAmplitude);
};
calcTempAmplitude([3, 4, 1, 6, 8, 10]);
calcTempAmplitude(temperatures);


const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celcius",
    value: prompt("Degree celcius:"),
  };
  const kelvin = parseFloat(measurement.value) + 273;
  return kelvin;
};
console.log(measureKelvin());

*/

// Coding challenge

const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4, 16, 20, 39];

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `...${arr[i]}°C in ${i + 1} days `;
  }
  return str;
};
console.log(printForecast(arr1));
console.log(printForecast(arr2));
