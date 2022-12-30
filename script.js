const playground = document.querySelector('.playground');

playground.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  const dot = document.createElement('div');
  dot.classList.add('dot');
  dot.id = event.pointerId;
  positionDot(dot, event);
  playground.append(dot);
});

playground.addEventListener('pointermove', (event) => {
  const dot = document.getElementById(event.pointerId);
  if (dot == null) return;
  positionDot(dot, event);
});

playground.addEventListener('pointerup', (event) => {
  const dot = document.getElementById(event.pointerId);
  if (dot == null) return;
  dot.remove();
});

playground.addEventListener('pointercancel', (event) => {
  const dot = document.getElementById(event.pointerId);
  if (dot == null) return;
  dot.remove();
});

function positionDot(dot, event) {
  dot.style.width = `${event.width * 10}px`;
  dot.style.height = `${event.height * 10}px`;
  dot.style.left = `${event.pageX}px`;
  dot.style.top = `${event.pageY}px`;
}

playground.ondragstart = () => false;
