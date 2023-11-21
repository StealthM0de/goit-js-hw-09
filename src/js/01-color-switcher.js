const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBackgroundColor() {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
}

startButton.addEventListener('click', () => {
  if (intervalId === null) {
    intervalId = setInterval(changeBackgroundColor, 1000);
    startButton.disabled = true;
  }
});

stopButton.addEventListener('click', () => {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
    startButton.disabled = false;
  }
});
