'use strict';

const isNumber = (str) => {
  if (str == null || str.trim() === '') return false;
  let num = Number(str);
  return !isNaN(parseFloat(num)) && isFinite(num);
}

function gameAdvancedBotFunc() {
  let attempts = 10;
  const getBotsNumber = () => Math.ceil(Math.random() * 100);
  const botsNumber = getBotsNumber();
  const langRu = confirm('Добро пожаловать в мини-игру "Угадай число."\nЧтобы продолжить на русском языке нажмите "OK".\n' +
    '\nWelcome to a mini - game "Guess-the-Number".\nIf you want to coontinue in English press "cancel".');

  function afterSavedBotsNumber() {
    const strArr = langRu ? [
      `Угадайте число от 1 до 100. Введите число. У Вас есть ${attempts} попыток.`,
      'Игра окончена. (Игрок нажал "Отмена").',
      'Введи число!',
      'Поздравляю, Вы угадали!!! Хотели бы сыграть еще?',
      'Попытки закончились, хотите сыграть еще?',
      'Загаданное число меньше. Осталось попыток:',
      'Загаданное число больше. Осталось попыток:'
    ] : [
      `Guess a number from 1 to 100. Enter a number. You have ${attempts} attempts.`,
      'The game is over. (Player has pressed "Cancel").',
      'Enter a number!',
      'Congratulations, you have guessed it right!!! Do you want to play more?',
      'Attempts are over, do you want to play once again?',
      'The secret number is smaller. Attempts left:',
      'The secret number is bigger.  Attempts left:'
    ];

    let usersInput = prompt(strArr[0]);
    let restart = false;

    if (usersInput == null) {
      alert(strArr[1]);
    } else if (!isNumber(usersInput)) {
      alert(strArr[2]);
      afterSavedBotsNumber();
    } else if (botsNumber == usersInput) {
      restart = confirm(strArr[3]);
      // the line below reads as 'if it was the last attempt and user had not guessed'
    } else if (attempts === 1) {
      restart = confirm(strArr[4])
    } else if (botsNumber < usersInput) {
      alert(`${strArr[5]} ${--attempts}`);
      afterSavedBotsNumber();
    } else if (botsNumber > usersInput) {
      alert(`${strArr[6]} ${--attempts}`);
      afterSavedBotsNumber();
    }

    if (restart) gameAdvancedBotFunc();
  }
  afterSavedBotsNumber();
}

gameAdvancedBotFunc();
