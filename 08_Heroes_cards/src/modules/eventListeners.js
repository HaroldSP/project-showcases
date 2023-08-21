'use strict';

import renderModule from './renderModule';
import { swiperFunc } from './swiper';
import getDataModule from './getDataModule.js';

const eventListeners = () => {
  getDataModule().then(data => {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    const selectInput = document.querySelector('#species-select');
    const genderInput = document.querySelector('#gender-select');
    const movieInput = document.querySelector('#movie-select');
    let selectedSpecies = '';
    let selectedGender = '';
    let selectedMovie = '';

    // ////////////////////////// macro-render func /////////////////////////////////////
    const macroRenderFunc = () => {
      let filteredData = data.reduce((acc, cardData) => {
        if ((selectedSpecies === '' || cardData.species === selectedSpecies) &&
          (selectedGender === '' || cardData.gender === selectedGender) &&
          (selectedMovie === '' || (cardData.movies && cardData.movies.includes(selectedMovie)))) {
          acc.push(cardData);
        }
        return acc;
      }, []);

      swiperWrapper.innerHTML = '';
      // Generate new card templates and insert them into the swiper
      const cardTemplates = filteredData.map(cardData => renderModule(cardData));
      swiperWrapper.innerHTML = cardTemplates.join('');
      swiperFunc();
    }; // ///////////////////////////////////////////////////////////////////////////////////

    selectInput.addEventListener('change', () => {
      selectedSpecies = selectInput.value;
      macroRenderFunc();
    });

    genderInput.addEventListener('change', () => {
      selectedGender = genderInput.value;
      macroRenderFunc();
    });

    movieInput.addEventListener('change', () => {
      selectedMovie = movieInput.value;
      macroRenderFunc();
    });
  });
}

export default eventListeners;
