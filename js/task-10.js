// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// 1. Розміри найпершого <div> - 30px на 30px.
// 2. Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// 3. Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const divEl = [];

  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    
    div.classList.add('items');
    div.style.backgroundColor = getRandomHexColor();

    div.style.width = width + 'px';
    width += 10;
    div.style.height = height + 'px';
    height += 10;

    divEl.push(div);
  }

  const ulEl = document.querySelector('#boxes');
  ulEl.append(...divEl);
}

function destroyBoxes(amount) { 
  const divEl = document.querySelectorAll('.items');
  for (let i = 0; i < amount; i += 1) {
   divEl[i].remove();
  }
}

const number = document.querySelector('input');
number.addEventListener('input', () => {});

const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]'); 

btnCreate.addEventListener('click', () => {
  createBoxes(Number(number.value))
});

btnDestroy.addEventListener ('click', () => {
  destroyBoxes(Number(number.value));
}) 