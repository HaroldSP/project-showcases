'use strict';

const scroll = () => {
  const button = document.querySelector('a[href="#contacts"]');
  const target = document.querySelector('#contacts');
  const targetPosition = target.offsetTop + 50; // + 50 px from padding
  const animationDuration = 500;

  let animationStart;

  function animateScroll (timestamp) {
    if (!animationStart) animationStart = timestamp;
    const animationProgress = timestamp - animationStart;
    const animationPercent = Math.min(1, animationProgress / animationDuration);
    const scrollPosition = Math.floor(animationPercent * targetPosition);

    window.scrollTo(0, scrollPosition);

    if (animationPercent < 1) requestAnimationFrame(animateScroll);
  }

  function handleClick (event) {
    event.preventDefault();
    animationStart = null;
    requestAnimationFrame(animateScroll);
  }

  button.addEventListener('click', handleClick);
};

export default scroll;
