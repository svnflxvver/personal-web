import Typed from 'typed.js';
import confetti from 'canvas-confetti';

const typed = new Typed('#element', {
  strings: [
    'a Computer Science Undergrad Student.',
    'a (soon to be) Front-End Engineer.',
    'an aspiring Creative Developer.',
    'a 3D Web Development Enthusiast.',
    'passionate in Video Editing and Cinematography',
    'currently cooking a Blockchain-based project ૮ ˶ᵔ ᵕ ᵔ˶ ა',
  ],
  typeSpeed: 50,
});

const appreciateBtn = document.getElementById('Appreciate');
appreciateBtn.addEventListener('click', () => {
  const myCanvas = document.createElement('canvas');
  myCanvas.style.position = 'fixed';
  myCanvas.style.inset = 0;
  myCanvas.style.width = '100vw';
  myCanvas.style.height = '100vh';
  myCanvas.style.zIndex = -1;
  document.body.appendChild(myCanvas);

  const myConfetti = confetti.create(myCanvas, {
    resize: true,
    useWorker: true,
  });
  myConfetti({
    particleCount: 100,
    spread: 160,
    // any other options from the global
    // confetti function
  });
});
