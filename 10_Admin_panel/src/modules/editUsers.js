'use strict';

import { render } from './render';

export const editUsers = () => {
  const tbody = document.getElementById('table-body');
  const form = document.querySelector('form');
  const nameInput = document.querySelector('#form-name');
  const emailInput = document.querySelector('#form-email');
  const childrenInput = document.querySelector('#form-children');
  let permissionInput; // change permissions behavior in order to save the toggled button status after editing

  tbody.addEventListener('click', e => {
    if (e.target.closest('.btn-edit')) {
      const tr = e.target.closest('tr');
      permissionInput = tr.querySelector('input[type=checkbox]'); // save permissions mode ...
      const id = tr.dataset.key;

      userService.getUser(id).then(user => {
        nameInput.value = user.name;
        emailInput.value = user.email;
        childrenInput.value = user.children;

        form.dataset.method = id;
      });
    }
  });

  form.addEventListener('submit', e => {
    e.preventDefault();

    if (form.dataset.method) {
      const id = form.dataset.method;
      const user = {
        name: nameInput.value,
        email: emailInput.value,
        children: childrenInput.checked,
        permissions: permissionInput.checked // save permissions mode ...
      };

      userService.editUser(id, user).then(() => {
        userService.getUsers().then(users => {
          render(users);
          form.reset();
          form.removeAttribute('data-method');
        });
      });
    }
  });
};
