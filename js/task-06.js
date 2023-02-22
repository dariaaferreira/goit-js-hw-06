const inputText = document.querySelector('#validation-input');

inputText.addEventListener('blur', (event) =>{
    function setClass (a, b) {
        if(inputText.classList.contains(a)) {
        } else if(inputText.classList.contains(b)) {
            inputText.classList.replace(b, a);
            } else {
                inputText.classList.add(a) 
            };
    }
    event.currentTarget.value.length === Number(inputText.dataset.length)
    ? setClass ('valid', 'invalid') 
    : setClass ('invalid', 'valid');    
});