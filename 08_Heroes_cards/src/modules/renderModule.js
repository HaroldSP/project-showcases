'use strict';

const renderModule = (cardData) => {
  try {
    return `
      <div class="swiper-slide">
        <div class="card-container">
          <div class="card">
            <div class="card-front">
              <div class="banner-image" style="background-image: url('${cardData.photo}')"></div>
              <h1>${cardData.name ? cardData.name : ''}</h1>
              <p>${cardData.realName ? cardData.realName : ''}</p>
            </div>
            <div class="card-back">
              <div class="card-back-content">
                <h1>Species</h1>
                <p>${cardData.species ? cardData.species : 'Unknown'}</p>
                <h1>Citizenship</h1>
                <p>${cardData.citizenship ? cardData.citizenship : 'Unknown'}</p>
                <h1>Gender</h1>
                <p>${cardData.gender ? cardData.gender : ''}</p>
                <h1>Years of life</h1>
                <p>${cardData.birthDay ? (cardData.deathDay ? cardData.birthDay : 'Born ' + cardData.birthDay) : 'Unknown'} 
                ${cardData.deathDay ? '-' + cardData.deathDay : ''} (${cardData.status})</p>
                <h1>Actors</h1>
                <p>${cardData.actors ? cardData.actors : ''}</p>
                <h1>Movies</h1>
                <p>${cardData.movies ? cardData.movies.map(movie => `<p>${movie}</p>`).sort().join('\n') : ''}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  } catch (error) {
    console.error('Error rendering module 2:', error);
    console.error(error.stack);
    return ''; // or you can return a default value or a message here or console.log(cardData)
  }
};

export default renderModule;
