"use strict";

const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const btnRoll = document.querySelector(".btn--roll");

diceEl.classList.add("hidden");

let score = [0, 0];
let currentScore = 0;
let activePlayer = 0;

score0El.textContent = "0";
score1El.textContent = "0";

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
};

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
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;
  } else {
    //switch to the other player
    switchPlayer();
  }
});

btnHold.addEventListener("click", function () {
  score[activePlayer] += currentScore;
  score0El.textContent = score[0];
  score1El.textContent = score[1];
  switchPlayer();
});
