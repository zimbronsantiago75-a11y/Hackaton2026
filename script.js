/* ---------- Estrellas que caen ---------- */
const sky = document.getElementById('sky');
const CANTIDAD = 45;

const rand = (min, max) => Math.random() * (max - min) + min;

for (let i = 0; i < CANTIDAD; i++) {
  const star = document.createElement('span');
  star.className = 'star';

  // Algunas son rayas largas y otras puntitos, como en el dibujo
  const esPunto = Math.random() < 0.3;
  const largo = esPunto ? rand(3, 6) : rand(30, 120);
  const ancho = esPunto ? largo : rand(2, 4);

  star.style.left = `${rand(5, 130)}vw`;
  star.style.height = `${largo}px`;
  star.style.width = `${ancho}px`;
  star.style.animationDuration = `${rand(3, 8)}s`;
  star.style.animationDelay = `${rand(-8, 0)}s`;
  star.style.setProperty('--y', `${rand(5, 95)}vh`);

  sky.appendChild(star);
}

/* ---------- Cambio entre portada e información ---------- */
function mostrarPantalla() {
  const verInfo = location.hash === '#informacion';
  document.body.classList.toggle('ver-info', verInfo);
  window.scrollTo(0, 0);
}

window.addEventListener('hashchange', mostrarPantalla);
mostrarPantalla();
