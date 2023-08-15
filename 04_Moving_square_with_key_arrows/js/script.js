'use strict';

/*

0) Создать функцию-конструктор DomElement, который содержит свойства
- selector,
- height,
- width,
- bg,
- fontSize

содержит метод, который создает элемент на странице в зависимости от условия:
- если строка selector начинается с точки, создаем div с классом
- если строка selector начинается с решетки # то создаем параграф с id

Внутрь созданного блока записывать любой текст. Метод записи может быть любым.
Создать новый объект на основе класса DomElement
Вызвать его метод чтобы создать элемент на странице

1) Используя функцию-конструктор DomElement из основного задания №1, создать квадрат 100 на 100 пикселей.
Ему необходимо задать фон(background) любого цвета и свойство position: absolute.

2) Поместить его на страницу только после выполнения события DOMContentLoaded.
Внутри тега body должно быть только подключение скрипта. (В случае подключения файла скрипта к странице перед закрывающим тэгом body)

3) Написать обработчик события для keydown, который будет принимать callback-функцию.
Данная функция будет отлавливать нажатие на стрелки клавиатуры.
В зависимости от нажатой кнопки(Вверх - стрелка вверх, Влево - стрелка влево, Вправо - стрелка вправо, Вниз - стрелка вниз)
наш квадрат будет перемещаться на 10 пикселей при каждом нажатии.
*/

const DomElement = function (selector, height, width, bg, fontSize) {
  // properties of the element
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;

  this.createElement = function () {
    let element;
    let randomNumber = Math.round(Math.random() * 100);

    // if the selector is a class
    if (selector[0] === '.') {
      element = document.createElement('div');
      element.class = selector;
      element.innerHTML = `<p>CreateElement with class + ${randomNumber}</p>`;
      // if the selector is an id
    } else if (selector[0] === '#') {
      element = document.createElement('p');
      element.id = selector;
      element.innerHTML = `<p>CreateElement with id + ${randomNumber}</p>`;
      // if the selector is a specific word 'square'
    } else if (selector === 'square') {
      element = document.createElement('div');
      element.id = selector;
      element.style.cssText = `height: ${100}px; width: ${100}px; background-color: ${'red'}; font-size: ${fontSize}px; position: absolute`;
    } else alert('что-то пошло не так');

    if (selector !== 'square') element.style.cssText = `height: ${height}px; width: ${width}px; background-color: ${bg}; font-size: ${fontSize}px;`;
    // append the created element to the document body
    document.body.appendChild(element);
  };

  this.moveElement = function () {
    // get the red square element
    const redSquare = document.querySelector('#square');
    console.log(redSquare);

    let x = 0;
    let y = 0;

    function move(event) {
      if (event.type === 'touchmove') {
        x = event.touches[0].clientX - redSquare.clientWidth / 2;
        y = event.touches[0].clientY - redSquare.clientHeight / 2;
      } else {
        x = event.clientX - redSquare.clientWidth / 2;
        y = event.clientY - redSquare.clientHeight / 2;
      }
      redSquare.style.left = x + 'px';
      redSquare.style.top = y + 'px';
    }

    function removeMove() {
      document.removeEventListener('touchmove', move);
      document.removeEventListener('mousemove', move);
    }

    document.addEventListener('keydown', function (event) {
      switch (event.key) {
        case 'ArrowLeft':
          x -= 10;
          break;
        case 'ArrowRight':
          x += 10;
          break;
        case 'ArrowUp':
          y -= 10;
          break;
        case 'ArrowDown':
          y += 10;
          break;
        default:
      }

      redSquare.style.left = x + 'px';
      redSquare.style.top = y + 'px';
    });

    redSquare.addEventListener('touchstart', function () {
      document.addEventListener('touchmove', move);
    });

    redSquare.addEventListener('touchend', removeMove);

    redSquare.addEventListener('mousedown', function () {
      document.addEventListener('mousemove', move);
    });

    document.addEventListener('mouseup', removeMove);
  };
};

const newBlock = new DomElement('square');
// const newBlockId = new DomElement('#best', 20, 250, 'green', 14);

newBlock.createElement();
newBlock.moveElement();

// newBlockId.createElement();
