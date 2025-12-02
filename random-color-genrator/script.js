const colorEl = document.querySelectorAll(".color");
const generateBtn = document.querySelector(".generate");
// prettier-ignore
const hexCodeArr = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
let colorGenerated = "";
// generate new hex code
function generateHex() {
  colorGenerated = "";
  for (let i = 0; i < 6; i++) {
    colorGenerated += hexCodeArr[Math.floor(Math.random() * hexCodeArr.length)];
  }
}
// navigator.clipboard.writeText
// function to display the generated color
function generateColor() {
  colorEl.forEach((el) => {
    const colorBg = el.querySelector(".color-main");
    const hex = el.querySelector(".hex");
    generateHex();
    // display the color bg
    colorBg.style.backgroundColor = `#${colorGenerated}`;
    // display the color hex code
    hex.textContent = `#${colorGenerated}`;

    el.addEventListener("click", function (e) {
      const parent = e.target.closest(".color");
      console.log(parent);
    });
  });
}
generateColor();

generateBtn.addEventListener("click", generateColor);
