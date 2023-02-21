let counterValue = 0;
const counter = document.querySelector('#value');

const decrBtn = document.querySelector('button[data-action="decrement"]');
const incrBtn = document.querySelector('button[data-action="increment"]');

decrBtn.addEventListener('click', () => {
    counterValue -= 1;
    counter.textContent = counterValue;
});

incrBtn.addEventListener('click', () => {
    counterValue += 1;
    counter.textContent = counterValue;
});