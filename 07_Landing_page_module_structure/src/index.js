'use strict';

import timer from './modules/timer.js';
import menu from './modules/menu.js';
import modal from './modules/modal';
import scroll from './modules/scroll';
import formValidation from './modules/formValidation';
import formValidationPlus from './modules/formValidationPlus';
import formValidationDouble from './modules/formValidationDouble';
import tabs from './modules/tabs';
import menuDelegation from './modules/menuDelegation';
import slider from './modules/slider';
import swiperFunc from './modules/sliderFunc.js';
import calc from './modules/calc';

timer('1 January 2024');
// menu();
modal();
scroll();
// formValidation();
// formValidationPlus();
formValidationDouble();
tabs();
menuDelegation();
slider('.portfolio-content', '.portfolio-item', '.portfolio-dots');
swiperFunc();
calc();
