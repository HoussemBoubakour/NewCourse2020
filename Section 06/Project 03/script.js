"use strict";

const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const btnRoll = document.querySelector(".btn--roll");

score0El.textContent = "0";
score1El.textContent = "0";
diceEl.classList.add("hidden");

let currentScore = 0;

btnRoll.addEventListener("click", function () {
  // Generate a random number

  const dice = Math.trunc(Math.random() * 6) + 1;

  // display dice

  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;
  console.log(dice);

  // check if it's 1.
  if (dice !== 1) {
    // add to the current score
    currentScore += dice;
  } else {
    //switch to the other player
    currentScore = 0;
  }
});
