const randomNumber = Math.floor(Math.random() * 10 + 1);
let result = 0;

const butNum = document.querySelector('.butNum');
const guessField = document.querySelector('.guessField');

const sumInput = document.querySelector('.sumInput');
const resultContent = document.querySelector('.resultContent');
const strHelp = document.querySelector('.strHelp');


const guessNumber = () => {
    const userNumber = Number(guessField.value); 
    result++;

    sumInput.textContent = 'Попыток: ' + result;

      if (userNumber === randomNumber) {
        resultContent.textContent = 'Красавчик! Угадал! Нажимай F5, играй ещё!';
        strHelp.textContent = '';
      } else {
        resultContent.textContent = 'Неудачник, пробуй ещё!';
        if(userNumber < randomNumber) {
            strHelp.textContent = 'Вы ввели меньше заданного числа';
        } else if(userNumber > randomNumber) {
            strHelp.textContent = 'Вы ввели больше заданного числа!';
        }
    };

      guessField.value = '';
      guessField.focus();
};

butNum.addEventListener('click', guessNumber);
