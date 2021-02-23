// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*
const x = 23;

if (x === 23) console.log(25);
console.log(1994);
*/

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
