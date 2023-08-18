'use strict';

const menuDelegation = () => {
  const body = document.querySelector('body');
  const menu = document.querySelector('menu');
  const handleMenuItemToggle = () => menu.classList.toggle('active-menu');

  body.addEventListener('click', (e) => {
    if (e.target.closest('.menu')) {
      handleMenuItemToggle();
    } else if ((menu.classList.contains('active-menu')) && e.target.matches('menu > ul > li > a')) {
      handleMenuItemToggle();
      e.preventDefault();
      let targetId = e.target.getAttribute('href').slice(1);
      let target = document.getElementById(targetId);
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if ((menu.classList.contains('active-menu')) && !e.target.classList.contains('active-menu') && !e.target.matches('menu > ul > li')) {
      handleMenuItemToggle();
    }
  });
};

export default menuDelegation;
