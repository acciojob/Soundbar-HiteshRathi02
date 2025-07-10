const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const buttons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');

let currentAudio = null;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Stop and remove any existing audio
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      currentAudio.remove(); // important to clean up for Cypress
    }

    const sound = button.getAttribute('data-sound');
    currentAudio = document.createElement('audio');
    currentAudio.src = `sounds/${sound}.mp3`;
    currentAudio.setAttribute('controls', ''); // Optional, helps Cypress detect it
    document.body.appendChild(currentAudio);   // Required for Cypress to detect
    currentAudio.play();
  });
});

stopButton.addEventListener('click', () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio.remove();
    currentAudio = null;
  }
});
