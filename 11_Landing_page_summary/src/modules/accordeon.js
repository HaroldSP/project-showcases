'use strict';

const accordeon = (e) => {
  const element = e.target.parentElement;
  const elements = element.parentElement.children;

  for (let otherElement of elements) {
    if (otherElement !== element) {
      otherElement.classList.remove('active');
    }
  }

  element.classList.add('active');
}

export default accordeon;
