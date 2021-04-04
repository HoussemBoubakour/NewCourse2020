"use strict";

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const namePlayer0 = document.getElementById("name--0");
const namePlayer1 = document.getElementById("name--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const btnRoll = document.querySelector(".btn--roll");

let score, currentScore, activePlayer, gameOn;

const newGame = function () {
  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  gameOn = true;
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  score0El.textContent = "0";
  score1El.textContent = "0";
  current0El.textContent = "0";
  current1El.textContent = "0";
};

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

const endGame = function () {
  btnHold.classList.add("hidden");
  btnRoll.classList.add("hidden");
  diceEl.classList.add("hidden");
  gameOn = false;
};

newGame();

btnRoll.addEventListener("click", function () {
  // Generate a random number

  if (gameOn) {
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
  }
});

btnHold.addEventListener("click", function () {
  if (gameOn) {
    score[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      score[activePlayer];
    //score0El.textContent = score[0];
    //score1El.textContent = score[1];
    if (score[0] >= 10) {
      namePlayer0.textContent = "WINNER!";
      player0El.classList.add("player--winner");
      endGame();
    } else if (score[1] >= 10) {
      namePlayer1.textContent = "WINNER!";
      player1El.classList.add("player--winner");
      endGame();
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", function () {
  btnHold.classList.remove("hidden");
  btnRoll.classList.remove("hidden");
  diceEl.classList.remove("hidden");
  namePlayer0.textContent = "Player 1";
  namePlayer1.textContent = "Player 2";
  newGame();
});
