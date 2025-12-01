const choices = document.querySelectorAll(".choice");
const playerChoice = document.getElementById("player");
const computerChoice = document.getElementById("computer");
const result = document.querySelector(".result");

const choicesArr = ["rock", "paper", "scissors"];

let computer = "";
function computerRandomChoice() {
  computer = choicesArr[Math.floor(Math.random() * choicesArr.length)];
}

choices.forEach((choice) => {
  choice.addEventListener("click", function (e) {
    computerRandomChoice();
    const target = e.target.closest(".choice").dataset.id;
    playerChoice.src = `images/${target}.png`;
    computerChoice.src = `images/${computer}.png`;

    if (
      (target === "rock" && computer === "scissors") ||
      (target === "scissors" && computer === "paper") ||
      (target === "paper" && computer === "rock")
    ) {
      result.textContent = `Player Picked ${target} and computer picked ${computer}, Player won!`;
    } else if (target === computer) {
      result.textContent = `Player Picked ${target} and computer picked ${computer}, It's a tie`;
    } else {
      result.textContent = `Player Picked ${target} and computer picked ${computer}, Computer won`;
    }
  });
});
