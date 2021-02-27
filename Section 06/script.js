"use strict";

/*
document.querySelector(".message").textContent = "🎉 Correct Number!";

document.querySelector(".number").textContent = "13";
document.querySelector(".score").textContent = "10";

document.querySelector(".guess").value = "23";
console.log(document.querySelector(".guess").value);
*/
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

const game = function () {
  document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);
    if (score > 1) {
      if (guess >= 0 && guess <= 20) {
        if (!guess) {
          // When there is no input
          document.querySelector(".message").textContent = " 🛑 No number!";
        } else if (guess === secretNumber) {
          // When the player wins
          document.querySelector(".message").textContent = "🎉 Correct Number!";
          document.querySelector("body").style.backgroundColor = "#60b347";
          document.querySelector(".number").style.width = "30rem";
          document.querySelector(".number").textContent = secretNumber;
        } else if (guess > secretNumber) {
          // When the guess is higher than the number
          document.querySelector(".message").textContent = "Too high !";
          score--;
          document.querySelector(".score").textContent = score;
        } else if (guess < secretNumber) {
          // When the guess is lower than the number
          document.querySelector(".message").textContent = "Too low !";
          score--;
          document.querySelector(".score").textContent = score;
        }
      } else
        document.querySelector(".message").textContent =
          "The number needs to be between 1 and 20 !";
    } else {
      document.querySelector(".message").textContent = "Game Over ! 💀";
      document.querySelector(".score").textContent = 0;
    }
  });
};

game();

document.querySelector(".again").addEventListener("click", function () {
  const secretNumber = Math.trunc(Math.random() * 20) + 1;
  let score = 20;
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";

  game();
});
