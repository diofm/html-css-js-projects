const toggleBtn = document.querySelector('.toggle-mode');
const textLight = document.querySelectorAll('.text-light');
const textPrimary = document.querySelectorAll('.text-primary');
const textHover = document.querySelectorAll('.text-primary-hover');
const circle = document.querySelector('.circle-left');
if (localStorage.getItem('darkmode') === 'true') {
  darkmode();
}
function darkmode()  {
  document.body.classList.toggle('bg-dark');
  textLight.forEach((text) => {
    text.classList.toggle('text-dark');
  });
  textPrimary.forEach((text) => {
    text.classList.toggle('text-primary-dark');
  })
  textHover.forEach((text) => {
    text.classList.toggle('text-primary-hover-dark');
  })
  circle.classList.toggle('circle-right');
  if (circle.classList.contains('circle-right')) {
    localStorage.setItem('darkmode', 'true');
  } else {
    localStorage.setItem('darkmode', 'false');
  }
}

toggleBtn.addEventListener('click', darkmode)