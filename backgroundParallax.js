if (screen.width > 900) {
  document.addEventListener('mousemove', parallax);
}

function parallax(e) {
  const speed = 1.5;
  const x = (window.innerWidth - e.pageX * speed) / 100;
  const y = (window.innerHeight - e.pageY * speed) / 100;
  document.querySelector(
    '.background'
  ).style.transform = `translateX(${x}px) translateY(${y}px)`;
}
