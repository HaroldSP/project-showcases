'use strict';

/*
In the function toggleMenu(), there are many event handlers. Use event delegation to create handlers for:

   - The close button of the menu and menu items.
   - The menu button.

Maximum of 2 event handlers in the toggleMenu() function.

Additional:
1) Write a single event handler for all events within the toggleMenu() function.
2) Implement the following functionality: if a click occurs outside the menu, close it.
*/

const tabs = () => {
  const tabPanel = document.querySelector('.service-header');
  const tabs = document.querySelectorAll('.service-header-tab');
  const tabContent = document.querySelectorAll('.service-tab');

  tabPanel.addEventListener('click', (e) => {
    if (e.target.closest('.service-header-tab')) {
      const tabBtn = e.target.closest('.service-header-tab');
      console.log(tabBtn);

      tabs.forEach((tab, index) => {
        if (tab === tabBtn) {
          tab.classList.add('active');
          tabContent[index].classList.remove('d-none');
        } else {
          tab.classList.remove('active');
          tabContent[index].classList.add('d-none');
        }
      })
    }
  });
};

export default tabs;
