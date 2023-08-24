'use strict';

const upBtn = () => {
  let scrollToTopBtn = document.querySelector('.up');

  window.addEventListener('scroll', function () {
    let servicesBlock = document.querySelector('#services');
    let servicesBlockTop = servicesBlock.offsetTop;

    let scrollPosition = window.scrollY;

    if (scrollPosition > servicesBlockTop) {
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  });

  scrollToTopBtn.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
export default upBtn;
