function createController() {
  if (document.getElementById('video-speed-controller')) return; // Evita criar múltiplos

  const controller = document.createElement('div');
  controller.id = 'video-speed-controller';

  controller.innerHTML = `
    <button id="decrease-speed">-</button>
    <span id="current-speed">1.0x</span>
    <button id="increase-speed">+</button>
    <button id="reset-speed">⟳</button>
  `;

  document.body.appendChild(controller);

  let speed = 1.0;

  const updateSpeed = (newSpeed) => {
    speed = Math.max(0.1, Math.min(newSpeed, 16));
    document.querySelectorAll('video').forEach(video => video.playbackRate = speed);
    document.getElementById('current-speed').textContent = `${speed.toFixed(1)}x`;
  };

  document.getElementById('increase-speed').onclick = () => updateSpeed(speed + 0.1);
  document.getElementById('decrease-speed').onclick = () => updateSpeed(speed - 0.1);
  document.getElementById('reset-speed').onclick = () => updateSpeed(1.0);
}

createController();
