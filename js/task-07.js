const rangeValue = document.querySelector('#font-size-control');
const spanValue = document.querySelector('#text');

rangeValue.addEventListener('input', (event) => 
spanValue.style.fontSize = Number(rangeValue.value) + 'px')
