const startGameBtn = document.querySelector(".start-game-btn");
const numInput = document.querySelector(".input");
const checkBtn = document.querySelector(".check-btn");
const answer = document.querySelector(".answer");
const hint = document.querySelector(".hint");
function playGame() {
  numInput.value = "";
  const getRandomNum =  Math.floor(Math.random() * 20) + 1;
  answer.innerHTML = "Take a Guess";
  document.body.style.backgroundColor = "#1B1B1B";

  checkBtn.addEventListener("click", function () {
    console.log(getRandomNum);
    if(numInput.value == getRandomNum) {
      answer.innerHTML = `${numInput.value} is the correct Number!`;
      hint.innerHTML = "Correct number";
      document.body.style.backgroundColor = "#60b347";
      startGameBtn.innerHTML = "Play Again";
    } else if(numInput.value > getRandomNum && numInput.value <= 20) {
      hint.innerHTML = "Too High!";
    } else if(numInput.value < getRandomNum && numInput.value >= 0) {
      hint.innerHTML = "Too Low!";
    } else {
      hint.innerHTML = "Please Enter a Number Between 1 and 20!";
      hint.style.color = "red";
    }
    
  })
}
startGameBtn.addEventListener("click", playGame);