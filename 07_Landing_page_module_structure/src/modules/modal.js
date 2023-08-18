'use strict';

import { animate } from './helpers';

const modal = () => {
  const modal = document.querySelector('.popup');
  const buttons = document.querySelectorAll('.popup-btn');

  let isSmallScreen;

  window.addEventListener('resize', () => {
    const width = document.documentElement.clientWidth;
    if (width < 768) isSmallScreen = true;
    else isSmallScreen = false;
  });

  function openModal() {
    modal.style.display = 'block';
    if (!isSmallScreen) {
      animate({
        duration: 1000,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          modal.style.opacity = progress;
        }
      });
    }
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  modal.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) modal.style.display = 'none';
  })
};

export default modal;
