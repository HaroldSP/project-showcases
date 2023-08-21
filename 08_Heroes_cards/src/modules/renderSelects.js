'use strict';

const renderSelects = (allSpeciesArr, allGenderArr, allMoviesArr) => {
  // sort function
  const ignoreTheSort = (a, b) => {
    const aTrimmed = a.toLowerCase().replace(/^the /, '');
    const bTrimmed = b.toLowerCase().replace(/^the /, '');

    if (aTrimmed < bTrimmed) {
      return -1;
    } else if (aTrimmed > bTrimmed) {
      return 1;
    } else {
      return 0;
    }
  }

  allMoviesArr.sort(ignoreTheSort);
  allSpeciesArr.sort();

  const speciesSelect = document.getElementById('species-select');
  const genderSelect = document.getElementById('gender-select');
  const movieSelect = document.getElementById('movie-select');

  allSpeciesArr.forEach(species => {
    const option = document.createElement('option');
    option.text = species;
    option.value = species;
    speciesSelect.appendChild(option);
  });

  allGenderArr.forEach(gender => {
    const option = document.createElement('option');
    option.text = gender;
    option.value = gender;
    genderSelect.appendChild(option);
  });

  allMoviesArr.forEach(movie => {
    const option = document.createElement('option');
    option.text = movie;
    option.value = movie;
    movieSelect.appendChild(option);
  });
};

export default renderSelects;
