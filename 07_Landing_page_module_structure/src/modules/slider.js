'use strict';

/*
Pass slider classes from the entry point index.js.

If the slider class is passed incorrectly and such an element doesn't exist on the page,
terminate the program's execution (return).
(to prevent errors with the connected slider module)

If the class of each slide is passed incorrectly and such elements don't exist on the page,
terminate the program's execution (return).
(to prevent errors with the connected slider module)

Provide default values for the active classes
(e.g., slide-active and dot-active).
*/

const slider = (sliderBlockClass, slidesCLass, dotsClass) => {
  const sliderBlock = document.querySelector(sliderBlockClass);
  if (!sliderBlock) return;
  const slides = document.querySelectorAll(slidesCLass);
  if (!slides) return;
  const ul = document.querySelector(dotsClass);
  if (!ul) return;
  const timeInterval = 2000;

  let currentSlide = 0;
  let interval;

  const getDots = (dotClass = 'dot') => {
    for (let i = 0; i < slides.length; i++) {
      const li = document.createElement('li');
      li.classList.add(dotClass);
      if (i === 0) li.classList.add('dot-active');
      ul.appendChild(li);
    };
  };

  getDots();
  const dots = document.querySelectorAll('.dot');

  const prevSlide = (elems, index, strClass = 'portfolio-item-active') => {
    elems[index].classList.remove(strClass);
  };

  const nextSlide = (elems, index, strClass = 'portfolio-item-active') => {
    elems[index].classList.add(strClass);
  };

  const autoSlide = () => {
    prevSlide(slides, currentSlide);
    prevSlide(dots, currentSlide, 'dot-active');
    currentSlide++;

    if (currentSlide >= slides.length) currentSlide = 0;
    nextSlide(slides, currentSlide);
    nextSlide(dots, currentSlide, 'dot-active');
  }

  const startSlide = (timer = 1500) => {
    interval = setInterval(autoSlide, timer);
  }

  const stopSlide = () => {
    clearInterval(interval);
  }

  sliderBlock.addEventListener('click', (e) => {
    e.preventDefault();

    if (!e.target.matches('.dot, .portfolio-btn')) return;
    prevSlide(slides, currentSlide);
    prevSlide(dots, currentSlide, 'dot-active');

    if (e.target.matches('#arrow-right')) currentSlide++;
    else if (e.target.matches('#arrow-left')) currentSlide--;
    else if (e.target.classList.contains('dot')) {
      dots.forEach((dot, index) => {
        if (e.target === dot) currentSlide = index;
      })
    }

    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;

    nextSlide(slides, currentSlide);
    nextSlide(dots, currentSlide, 'dot-active');
  });

  sliderBlock.addEventListener('mouseenter', (e) => {
    if (e.target.matches('.dot, .portfolio-btn')) stopSlide();
  }, true);

  sliderBlock.addEventListener('mouseleave', (e) => {
    if (e.target.matches('.dot, .portfolio-btn')) startSlide(timeInterval);
  }, true);

  startSlide(timeInterval);
};

export default slider;
