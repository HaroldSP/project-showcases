'use strict';

import { render } from './render';
import { debounce } from './helpers';

export const searchUsers = () => {
  const searchInput = document.getElementById('search-input');
  const debounceSearch = debounce(() => {
    userService.getSearchUsers(searchInput.value).then(users => {
      render(users);
    });
  }); // add custom debounce value here, e.g. "n, 3000"

  searchInput.addEventListener('input', debounceSearch);
};
