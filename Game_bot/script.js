/* eslint-disable prefer-const */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */

'strict';

const isNumber = function (str) {
  // if (str == null) return false;
  let num = Number(str);
  return !isNaN(parseFloat(num)) && isFinite(num);
}

function gameAdvancedBotFunc () {
  let attempts = 10;
  let getBotsNumber = () => Math.ceil(Math.random() * 100);
  let botsNumber = getBotsNumber();

  // console.log(`Bots number is ${botsNumber}`); // for debugging

  function afterSavedBotsNumber () {
    let usersInput = prompt(`Угадайте число от 1 до 100. Введите число. У Вас есть ${attempts} попыток.`);
    let restart = false;

    if (usersInput == null) {
      alert('Игра окончена. (Игрок нажал "Отмена").');
    } else if (!isNumber(usersInput)) {
      alert('Введи число!');
      afterSavedBotsNumber();
    // eslint-disable-next-line eqeqeq
    } else if (botsNumber == usersInput) {
      restart = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
      // the line below reads as 'if it was the last attempt and user had not guessed'
    } else if (attempts === 1) {
      restart = confirm('Попытки закончились, хотите сыграть еще?')
    } else if (botsNumber < usersInput) {
      alert(`Загаданное число меньше. Осталось ${--attempts} попыток`);
      afterSavedBotsNumber();
    } else if (botsNumber > usersInput) {
      alert(`Загаданное число больше. Осталось ${--attempts} попыток`);
      afterSavedBotsNumber();
    }

    if (restart) gameAdvancedBotFunc();
  }
  afterSavedBotsNumber();
}

const gameBot = gameAdvancedBotFunc();
