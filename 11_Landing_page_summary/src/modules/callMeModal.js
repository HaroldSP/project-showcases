'use strict';

import accordeon from './accordeon';

const callMeModal = () => {
  const modalOverlay = document.querySelector('.modal-overlay');
  const modalCallMe = document.querySelector('.modal-callback');

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('callback-btn')) {
      modalOverlay.style.display = 'block';
      modalCallMe.style.display = 'block';
    } else if (e.target.classList.contains('fancyboxModal')) {
      modalOverlay.style.display = 'block';
      modalCallMe.style.display = 'block';
    } else if (e.target.classList.contains('modal-overlay') || e.target.closest('.modal-close')) {
      modalOverlay.style.display = 'none';
      modalCallMe.style.display = 'none';
    } else if (e.target.classList.contains('title')) {
      accordeon(e)
    } else if (e.target.matches('div.top-menu.visible-md-inline-block.visible-lg-inline-block > ul > li > a')) {
      e.preventDefault();
      let targetId = e.target.getAttribute('href').slice(1);
      let target = document.getElementById(targetId);
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

export default callMeModal;
