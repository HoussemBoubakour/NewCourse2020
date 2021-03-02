"use strict";

/*
document.querySelector(".message").textContent = "🎉 Correct Number!";
document.querySelector(".message").textContent = "Start guessing...";

document.querySelector(".number").textContent = "13";
document.querySelector(".score").textContent = "10";

document.querySelector(".guess").value = "23";
console.log(document.querySelector(".guess").value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const dispNumber = document.querySelector(".number");
const dispScore = document.querySelector(".score");
const dispBody = document.querySelector("body");
const dispHighscore = document.querySelector(".highscore");

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (score > 1) {
    if (guess >= 0 && guess <= 20) {
      if (!guess) {
        // When there is no input
        displayMessage("🛑 No number!");
      } else if (guess === secretNumber) {
        // When the player wins
        displayMessage("🎉 Correct Number!");
        dispBody.style.backgroundColor = "#60b347";
        dispNumber.style.width = "30rem";
        dispNumber.textContent = secretNumber;

        if (score > highscore) {
          highscore = score;
          dispHighscore.textContent = highscore;
        }
      } else if (guess !== secretNumber) {
        score--;
        dispScore.textContent = score;
        displayMessage(guess > secretNumber ? "⏫ Too high !" : "⏬Too low !");
      }
    } else displayMessage("The number needs to be between 1 and 20 !");
  } else {
    displayMessage("Game Over ! 💀");
    dispScore.textContent = 0;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
  dispScore.textContent = score;
  dispBody.style.backgroundColor = "#222";
  dispNumber.style.width = "15rem";
  dispNumber.textContent = "?";
});
