window.addEventListener('keydown',  (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.play();
    const btns = document.querySelectorAll('.btn');
    btns.forEach(btn => {
      btn.classList.remove('active');
        if(btn.getAttribute('data-key') == e.keyCode) {
        btn.classList.add('active');
      }
      setTimeout(() => {
        btn.classList.remove('active');
    }, 200); // 500ms = 0.5s
    })
  })