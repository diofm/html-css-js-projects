const colorEl = document.querySelectorAll(".color");
const generateBtn = document.querySelector(".generate");
const copyBtn = document.querySelector(".fa-copy");
const saveBtn = document.querySelector('.fa-bookmark')
const savedBtn = document.querySelector(".saved");
const colorsContainer = document.querySelector('.colors')
const savedColorsContainer = document.querySelector('.saved-colors')
// prettier-ignore
const hexCodeArr = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
let colorGenerated = "";
const savedColors = JSON.parse(localStorage.getItem('savedColors')) || [];
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
    colorsContainer.style.display = 'grid';
    savedColorsContainer.style.display = 'none';
    const colorBg = el.querySelector(".color-main");
    const hex = el.querySelector(".hex");
    generateHex();
    // display the color bg
    colorBg.style.backgroundColor = `#${colorGenerated}`;
    // display the color hex code
    hex.textContent = `#${colorGenerated}`;

    el.addEventListener("click", function (e) {
      if(e.target.classList.contains("fa-copy")) {
        navigator.clipboard.writeText(hex.textContent);
      }

      if(e.target.classList.contains('fa-bookmark')) {
        if(!savedColors.find(el=> el === hex.textContent)) {
          savedColors.push(hex.textContent);
          localStorage.setItem('savedColors', JSON.stringify(savedColors));
        }
      }
    });
  });
}
generateColor();

generateBtn.addEventListener("click", generateColor);

savedBtn.addEventListener('click', function() {
  let htmlTemp = ``;
  savedColorsContainer.innerHTML = '';
  colorsContainer.style.display = 'none';
  savedColorsContainer.style.display = 'grid';
  
  savedColors.forEach((el) => {
    let element = `
    <div class="color">
          <div class="color-main" style="background: ${el}">
            <i class="fa-regular fa-bookmark"></i>
          </div>
          <div class="color-footer">
            <div class="hex">${el}</div>
            <i class="fa-regular fa-copy"></i>
          </div>
        </div>
    `
    htmlTemp+= element
  })
  savedColorsContainer.innerHTML = htmlTemp
})