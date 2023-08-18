'use strict';

// https://learn.javascript.ru/js-animation

const animate = ({ timing, draw, duration }) => {
  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction from 0 to 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // alculating the current state of animation
    let progress = timing(timeFraction);

    draw(progress); // render it

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
};

export { animate };
