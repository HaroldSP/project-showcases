'use strict';

import renderModule from './renderModule';
import renderSelects from './renderSelects'
import { swiperFunc } from './swiper';

const getDataModule = () => {
  const getData = (source = 'dbHeroes.json') => {
    return fetch(source)
      .then(response => {
        if (!response.ok) { console.log('data not loaded'); return }
        return response.json();
      })
      .then(data => {
        return data;
      })
      .catch(error => console.error('An error occurred:', error));
  };

  return getData()
    .then(data => {
      let allKeysArr = [];
      let allSpeciesArr = [];
      let allGenderArr = [];
      let allMoviesArr = [];

      for (const obj of data) {
        for (const key in obj) {
          if (key === 'species') {
            const value = obj[key];
            if (!allSpeciesArr.includes(value)) allSpeciesArr.push(value);
          };

          if (key === 'gender') {
            let value = obj[key];
            if (value === 'Female') value = 'female';
            if (!allGenderArr.includes(value)) allGenderArr.push(value);
          }

          if (key === 'movies') {
            let value = obj[key];
            for (let movie of value) {
              if (!allMoviesArr.includes(movie)) allMoviesArr.push(movie);
            }
          }

          if (!allKeysArr.includes(key)) allKeysArr.push(key);
        }
      }

      renderSelects(allSpeciesArr, allGenderArr, allMoviesArr);

      const cardTemplates = data.map(cardData => {
        if (!cardData) return '';
        return renderModule(cardData);
      });

      // Insert the card templates into the swiper wrapper element
      const swiperWrapper = document.querySelector('.swiper-wrapper');
      swiperWrapper.innerHTML = cardTemplates.join('');

      swiperFunc();
      return data;
    });
}

export default getDataModule;
