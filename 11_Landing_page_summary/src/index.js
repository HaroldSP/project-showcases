'use strict';

import callMeModal from './modules/callMeModal';
import scroll from './modules/scroll';
import { swiperFunc } from './modules/swiper.js';
import { swiperFuncServices } from './modules/swiperServices';
// import accordeon from './modules/accordeon';
import upBtn from './modules/upBtn'
import sendform from './modules/sendform';

callMeModal();
// scroll();
swiperFunc();
swiperFuncServices();
// accordeon();
upBtn();
sendform({ formId: 'form1' });
