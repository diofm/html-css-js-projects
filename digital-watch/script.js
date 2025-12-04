const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

function setTime() {
  const now = new Date();
  hour.textContent = now.getHours().toString().padStart(2, "0");
  min.textContent = now.getMinutes().toString().padStart(2, "0");
  sec.textContent = now.getSeconds().toString().padStart(2, "0");
}
setTime();
setInterval(() => setTime(), 1000);
