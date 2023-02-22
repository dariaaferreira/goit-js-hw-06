function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");
const bodyColor = document.querySelector('body')


btnChangeColor.addEventListener('click', (event) => {
  spanColor.innerHTML = getRandomHexColor();
  bodyColor.style.backgroundColor = getRandomHexColor();
})