const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

let intervalColorChange = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }


startButton.addEventListener('click', () => {
    startButton.disabled = true;
    intervalColorChange = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  });
  
stopButton.addEventListener('click', () => {
    startButton.disabled = false;
    clearInterval(intervalColorChange);
    intervalColorChange = null;
  });