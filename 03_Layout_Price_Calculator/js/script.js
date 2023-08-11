'use strict';

// Setting LangRu var to true by default. Retrieving a new value from a localStorage if already had one

let langRu = true;
if (localStorage.language !== undefined) langRu = JSON.parse(localStorage.getItem('language'));

// ////////////////////////////////  document tittle /////////////////////////////////

const title = document.getElementsByTagName('h1')[0];
const titleEn = document.getElementsByTagName('h1')[1];

// ////////////////////////////////  Plus btn ///////////////////////////////////////

let buttonPlus = document.querySelectorAll('.screen-btn')[0];
let buttonPlusEn = document.querySelectorAll('.screen-btn')[1];

// ////////////////////////////////  checkboxes /////////////////////////////////////

const otherItemsPercent = document.querySelectorAll('.other-items.percent'); // 2 for each lang
const otherItemsNumber = document.querySelectorAll('.other-items.number'); // 5 for each lang

// ////////////////////////////////  range slider ///////////////////////////////////

const inputRange = document.querySelectorAll('.rollback > .main-controls__range > input')[0];
const inputRangeValue = document.querySelectorAll('.rollback > .main-controls__range > span')[0];
const inputRangeEn = document.querySelectorAll('.rollback > .main-controls__range > input')[1];
const inputRangeValueEn = document.querySelectorAll('.rollback > .main-controls__range > span')[1];

// ////////////////////////////////  Start & reset btns /////////////////////////////

let startBtn = document.getElementsByClassName('handler_btn')[0];
let resetBtn = document.getElementsByClassName('handler_btn')[1];
let startBtnEn = document.getElementsByClassName('handler_btn')[2];
let resetBtnEn = document.getElementsByClassName('handler_btn')[3];

// ////////////////////////////////  Result inputs /////////////////////////////////

let total_PriceLayoutRu = document.getElementsByClassName('total-input')[0];
let totalCount_numberOfScreensRu = document.getElementsByClassName('total-input')[1];
let totalCountOther_priceAddServiceRu = document.getElementsByClassName('total-input')[2];
let fullTotalCount_fullPriceRu = document.getElementsByClassName('total-input')[3];
let totalCountRollbackRu = document.getElementsByClassName('total-input')[4];

let total_PriceLayoutEn = document.getElementsByClassName('total-input')[5];
let totalCount_numberOfScreensEn = document.getElementsByClassName('total-input')[6];
let totalCountOther_priceAddServiceEn = document.getElementsByClassName('total-input')[7];
let fullTotalCount_fullPriceEn = document.getElementsByClassName('total-input')[8];
let totalCountRollbackEn = document.getElementsByClassName('total-input')[9];

// //////////////////  Screens type select and amount input /////////////////////////

let screensRu = document.querySelectorAll('.screenRu');
let screensEn = document.querySelectorAll('.screenEn');

// /////////////////////////////////  cmsCheckbox ////////////////////////////////////

let cmsCheckboxRu = document.querySelector('#cms-open-ru');
let cmsCheckboxEn = document.querySelector('#cms-open-en');

// /////////////////////////////////  modal window ////////////////////////////////////

let languageModal = document.getElementById('languageModal');
let continueRussianBtn = document.getElementById('continueRussian');
let switchToEnglishBtn = document.getElementById('switchToEnglish');
let ruContentDiv = document.getElementById('russian-content');
let enContentDiv = document.getElementById('english-content');

// /////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////  main ////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////

const appData = {
  title: '',
  screensRu: [],
  screensEn: [],
  screensTotalNumber: 0,
  screenPrice: 0,
  adaptive: true,
  rollback: 0,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  servicesPercent: {},
  servicesNumber: {},
  isCalculated: false,

  init: function () {
    this.languageSelect();
    this.addTitle();
    startBtn.addEventListener('click', this.start);
    startBtnEn.addEventListener('click', this.start);
    resetBtn.addEventListener('click', this.reset);
    resetBtnEn.addEventListener('click', this.reset);
    buttonPlus.addEventListener('click', this.addScreenBlock);
    buttonPlusEn.addEventListener('click', this.addScreenBlock);
    inputRange.addEventListener('input', this.addRollbackValues);
    inputRangeEn.addEventListener('input', this.addRollbackValues);
    cmsCheckboxRu.addEventListener('change', this.addCMSOptions);
    cmsCheckboxEn.addEventListener('change', this.addCMSOptions);
  },

  languageSelect: function () {
    // If the code runs for the first time, this function triggers an animation of the modal pop-up.
    // The pop-up asks whether to continue in Russian or switch to English
    // and stores the chosen value in local storage.
    // When the code runs again, it selects content based on the stored value.

    if (localStorage.getItem('language') === null) {
      ruContentDiv.style.display = 'block'; // Display Russian content
      enContentDiv.style.display = 'none'; // Hide English content
      this.fadeInAnim(languageModal);
      // languageModal.style.display = 'block'; // show modal

      continueRussianBtn.addEventListener('click', () => {
        langRu = true;
        localStorage.setItem('language', JSON.stringify(langRu));
        this.addTitle();
        this.fadeOutAnim(languageModal);
        // languageModal.style.display = 'none'; // Hide modal
      });

      switchToEnglishBtn.addEventListener('click', () => {
        ruContentDiv.style.display = 'none'; // Hide Russian content
        enContentDiv.style.display = 'block'; // Display English content
        langRu = false;
        localStorage.setItem('language', JSON.stringify(langRu));
        this.addTitle();
        this.fadeOutAnim(languageModal);
        // languageModal.style.display = 'none'; // Hide modal
      });

      document.addEventListener('click', (e) => {
        // If the click was outside the modal content, then close the modal
        if (e.target === document.getElementById('languageModal')) {
          langRu = true;
          localStorage.setItem('language', JSON.stringify(langRu));
          this.fadeOutAnim(languageModal);
          // languageModal.style.display = 'none'; // Hide modal
        }
      });
    } else if (langRu === true) {
      languageModal.style.display = 'none'; // Hide modal
      this.addTitle();
      enContentDiv.style.display = 'none';
      ruContentDiv.style.display = 'block'; // Display Russian content
    } else {
      languageModal.style.display = 'none'; // Hide modal
      this.addTitle();
      ruContentDiv.style.display = 'none';
      enContentDiv.style.display = 'block'; // Display English content
    }
  },

  addTitle: function () {
    // naming the document itself (the name that appears on the tab of your browser)
    langRu ? (document.title = title.textContent) : (document.title = titleEn.textContent);
  },

  start: function () {
    if (langRu) {
      let hasZeroValue = false; // Flag variable

      screensRu = document.querySelectorAll('.screenRu');

      screensRu.forEach((screen) => {
        const select = screen.querySelector('select');
        const input = screen.querySelector('input');

        // Check if any value is zero
        if (+select.value === 0 || +input.value === 0) hasZeroValue = true;
      });

      if (hasZeroValue) {
        alert(
          'Убедитесь, что вы корректно выбрали типы и стоимости экранов.\n' +
          'Должен быть выбран тип экранов, а также их количество не должно равняться нулю.'
        );
        return; // Exit the function
      }
    } else {
      let hasZeroValue = false; // Flag variable
      screensEn = document.querySelectorAll('.screenEn');

      screensEn.forEach((screen) => {
        const select = screen.querySelector('select');
        const input = screen.querySelector('input');

        // Check if any value is zero
        if (+select.value === 0 || +input.value === 0) hasZeroValue = true;
      });

      if (hasZeroValue) {
        alert(
          'Make sure that you have correctly selected screen types and costs.\n' +
          'The screen types must be selected, and their quantity should not be zero.'
        );
        return;
      }
    }
    appData.addScreens();
    appData.addServices();
    appData.addPrices();
    appData.showResult();
    appData.blockSelectandInput();
    // appData.logger();
  },

  showResult: function () {
    if (langRu) {
      total_PriceLayoutRu.value = this.screenPrice;
      totalCountOther_priceAddServiceRu.value = this.servicePricesPercent + this.servicePricesNumber;
      fullTotalCount_fullPriceRu.value = this.fullPrice;
      totalCountRollbackRu.value = this.servicePercentPrice;
      totalCount_numberOfScreensRu.value = this.screensTotalNumber;
      this.isCalculated = true;
    } else {
      total_PriceLayoutEn.value = this.screenPrice;
      totalCountOther_priceAddServiceEn.value = this.servicePricesPercent + this.servicePricesNumber;
      fullTotalCount_fullPriceEn.value = this.fullPrice;
      totalCountRollbackEn.value = this.servicePercentPrice;
      totalCount_numberOfScreensEn.value = this.screensTotalNumber;
      this.isCalculated = true;
    }
  },

  addScreens: function () {
    if (langRu) {
      screensRu = document.querySelectorAll('.screenRu');
      screensRu.forEach((screen, index) => {
        const select = screen.querySelector('select');
        const input = screen.querySelector('input');
        const selectName = select.options[select.selectedIndex].textContent;
        this.screensRu.push({
          id: index,
          name: selectName,
          price: +select.value * +input.value,
          count: +input.value
        });
      });
    } else {
      screensEn = document.querySelectorAll('.screenEn');
      screensEn.forEach((screen, index) => {
        const select = screen.querySelector('select');
        const input = screen.querySelector('input');
        const selectName = select.options[select.selectedIndex].textContent;
        this.screensEn.push({
          id: index,
          name: selectName,
          price: +select.value * +input.value,
          count: +input.value
        });
      });
    }
  },

  addServices: function () {
    let cmsSelectRu = document.getElementById('cms-select-ru');
    let cmsSelectEn = document.getElementById('cms-select-en');

    let cmsOtherOptionsInputRu = document.getElementById('cms-other-input-ru');
    let cmsOtherOptionsInputEn = document.getElementById('cms-other-input-en');

    if (langRu) {
      const selectedOption = cmsSelectRu.options[cmsSelectRu.selectedIndex];
      if (selectedOption.innerHTML === 'WordPress') {
        this.servicesNumber[selectedOption.innerHTML] = +cmsSelectRu.value;
      } else if (selectedOption.innerHTML === 'Другое') {
        this.servicesPercent[selectedOption.innerHTML] =
          +cmsOtherOptionsInputRu.value;
      }

      otherItemsPercent.forEach((item) => {
        const check = item.querySelector('input[type=checkbox]');
        const label = item.querySelector('label');
        const input = item.querySelector('input[type=text]');

        if (check.checked) {
          this.servicesPercent[label.textContent] = +input.value;
        }
      });

      otherItemsNumber.forEach((item) => {
        const check = item.querySelector('input[type=checkbox]');
        const label = item.querySelector('label');
        const input = item.querySelector('input[type=text]');

        if (check.checked) {
          this.servicesNumber[label.textContent] = +input.value;
        }
      });
    } else {
      const selectedOption = cmsSelectEn.options[cmsSelectEn.selectedIndex];
      if (selectedOption.innerHTML === 'WordPress') {
        this.servicesNumber[selectedOption.innerHTML] = +cmsSelectEn.value;
      } else if (selectedOption.innerHTML === 'Other') {
        this.servicesPercent[selectedOption.innerHTML] =
          +cmsOtherOptionsInputEn.value;
      }

      otherItemsPercent.forEach((item) => {
        const check = item.querySelector('input[type=checkbox]');
        const label = item.querySelector('label');
        const input = item.querySelector('input[type=text]');

        if (check.checked) {
          this.servicesPercent[label.textContent] = +input.value;
        }
      });

      otherItemsNumber.forEach((item) => {
        const check = item.querySelector('input[type=checkbox]');
        const label = item.querySelector('label');
        const input = item.querySelector('input[type=text]');

        if (check.checked) {
          this.servicesNumber[label.textContent] = +input.value;
        }
      });
    }
  },

  addCMSOptions: function () {
    let cmsOptionsRu = document.querySelectorAll('.hidden-cms-variants')[0];
    let cmsOptionsEn = document.querySelectorAll('.hidden-cms-variants')[1];
    let cmsSelectRu = document.getElementById('cms-select-ru');
    let cmsSelectEn = document.getElementById('cms-select-en');
    let cmsOtherOptionsRu = cmsOptionsRu.querySelector('.main-controls__input');
    let cmsOtherOptionsEn = cmsOptionsEn.querySelector('.main-controls__input');

    if (langRu) {
      if (cmsCheckboxRu.checked) {
        cmsOptionsRu.style.display = 'flex';

        cmsSelectRu.addEventListener('change', (event) => {
          if (event.target.value === 'other') cmsOtherOptionsRu.style.display = 'flex';
          else cmsOtherOptionsRu.style.display = 'none';
        });
      } else cmsOptionsRu.style.display = 'none';
    } else {
      if (cmsCheckboxEn.checked) {
        cmsOptionsEn.style.display = 'flex';

        cmsSelectEn.addEventListener('change', (event) => {
          if (event.target.value === 'other') cmsOtherOptionsEn.style.display = 'flex';
          else cmsOtherOptionsEn.style.display = 'none';
        });
      } else cmsOptionsEn.style.display = 'none';
    }
  },

  addScreenBlock: function () {
    // This method responds for correct adding new blocks of screens - types and values
    // Basically what will happen after you press "+" button

    if (langRu) {
      const cloneScreen = screensRu[0].cloneNode(true);
      cloneScreen.querySelector('input').value = '';

      screensRu[screensRu.length - 1].after(cloneScreen);
      screensRu = document.querySelectorAll('.screenRu');
    } else {
      const cloneScreen = screensEn[0].cloneNode(true);
      cloneScreen.querySelector('input').value = '';
      screensEn[screensEn.length - 1].after(cloneScreen);
      screensEn = document.querySelectorAll('.screenEn');
    }
  },

  addPrices: function () {
    if (langRu) {
      for (let screen of this.screensRu) {
        this.screenPrice += +screen.price;
      }
      for (let screen of this.screensRu) {
        this.screensTotalNumber += +screen.count;
      }
      for (let key in this.servicesNumber) {
        this.servicePricesNumber += this.servicesNumber[key];
      }
      for (let key in this.servicesPercent) {
        this.servicePricesPercent +=
          this.screenPrice * (this.servicesPercent[key] / 100);
      }
      this.fullPrice =
        this.screenPrice + this.servicePricesPercent + this.servicePricesNumber;
      this.servicePercentPrice = Math.ceil(
        this.fullPrice - this.fullPrice * (this.rollback / 100)
      );
    } else {
      for (let screen of this.screensEn) {
        this.screenPrice += +screen.price;
      }
      for (let screen of this.screensEn) {
        this.screensTotalNumber += +screen.count;
      }
      for (let key in this.servicesNumber) {
        this.servicePricesNumber += this.servicesNumber[key];
      }
      for (let key in this.servicesPercent) {
        this.servicePricesPercent +=
          this.screenPrice * (this.servicesPercent[key] / 100);
      }
      this.fullPrice =
        this.screenPrice + this.servicePricesPercent + this.servicePricesNumber;
      this.servicePercentPrice = Math.ceil(
        this.fullPrice - this.fullPrice * (this.rollback / 100)
      );
    }
  },

  addRollbackValues: function (e) {
    if (langRu) {
      inputRangeValue.textContent = e.target.value + '%';
      appData.rollback = +e.target.value;
      if (appData.screensTotalNumber !== 0) {
        totalCountRollbackRu.value = Math.ceil(
          appData.fullPrice - appData.fullPrice * (appData.rollback / 100)
        );
      }
    } else {
      inputRangeValueEn.textContent = e.target.value + '%';
      appData.rollback = +e.target.value;
      if (appData.screensTotalNumber !== 0) {
        totalCountRollbackEn.value = Math.ceil(
          appData.fullPrice - appData.fullPrice * (appData.rollback / 100)
        );
      }
    }
  },

  // determineDiscount: function (price) {
  //   if (price > 30000) {
  //     return 'Даем скидку в 10%';
  //   } else if (price >= 15000 && price <= 30000) {
  //     return 'Даем скидку в 5%';
  //   } else if (price >= 0 && price < 15000) {
  //     return 'Скидка не предусмотрена';
  //   } else if (price < 0) {
  //     return 'Что-то пошло не так';
  //   } else {
  //     return 'Точно что-то пошло не так';
  //   }
  // },

  blockSelectandInput: function () {
    if (this.isCalculated === true) {
      let input = document.querySelectorAll('input[placeholder="Количество экранов"]');
      input.forEach(function (item) { item.disabled = true; });

      let mainSelect = document.querySelectorAll('select[name="views-select"]');
      mainSelect.forEach(function (item) { item.disabled = true; });

      let checkboxes = document.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach(function (item) { item.disabled = true; });

      buttonPlus = document.querySelectorAll('.screen-btn')[0];
      buttonPlus.disabled = true;

      buttonPlusEn = document.querySelectorAll('.screen-btn')[1];
      buttonPlusEn.disabled = true;

      startBtn.hidden = true;
      startBtnEn.hidden = true;
      resetBtn.style = 'display: true;';
      resetBtnEn.style = 'display: true;';

      let cmsOtherOptionsInputRu = document.getElementById('cms-other-input-ru');
      cmsOtherOptionsInputRu.disabled = true;

      let cmsOtherOptionsInputEn = document.getElementById('cms-other-input-en');
      cmsOtherOptionsInputEn.disabled = true;

      inputRange.disabled = true;
      inputRangeEn.disabled = true;
    }
  },

  reset: function () {
    appData.title = '';
    appData.screensRu = [];
    appData.screensEn = [];
    appData.screensTotalNumber = 0;
    appData.screenPrice = 0;
    appData.adaptive = true;
    appData.rollback = 0;
    appData.servicePricesPercent = 0;
    appData.servicePricesNumber = 0;
    appData.fullPrice = 0;
    appData.servicePercentPrice = 0;
    appData.servicesPercent = {};
    appData.servicesNumber = {};
    appData.isCalculated = false;

    let input = document.querySelectorAll('input[placeholder="Количество экранов"]');
    input.forEach(function (item) { item.disabled = false; });

    let mainSelect = document.querySelectorAll('select[name="views-select"]');
    mainSelect.forEach(function (item) { item.disabled = false; });

    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function (item) { item.disabled = false; });

    let cmsCheckboxRu = document.querySelector('#cms-open-ru');
    cmsCheckboxRu.checked = false;
    let cmsCheckboxEn = document.querySelector('#cms-open-en');
    cmsCheckboxEn.checked = false;

    buttonPlus = document.querySelectorAll('.screen-btn')[0];
    buttonPlus.disabled = false;

    buttonPlusEn = document.querySelectorAll('.screen-btn')[1];
    buttonPlusEn.disabled = false;

    startBtn.hidden = false;
    startBtnEn.hidden = false;
    resetBtn.style = 'display: none;';
    resetBtnEn.style = 'display: none;';

    if (langRu) {
      for (let index = screensRu.length - 1; index > 0; index--) {
        screensRu[index].remove();
      }

      // getting an actual amount of screens
      screensRu = document.querySelectorAll('.screenRu');

      // seacrh for an array, if an element is not 0 than remove it or clean it.
      screensRu.forEach((item, index) => {
        if (index !== 0) item.parentElement.removeChild(item);
        else {
          item.querySelector('input').value = '';
          item.querySelector('select').value = '';
        }
      });
    } else {
      for (let index = screensEn.length - 1; index > 0; index--) {
        screensEn[index].remove();
      }

      // getting an actual amount of screens
      screensEn = document.querySelectorAll('.screenEn');

      // seacrh for an array, if an element is not 0 than remove it or clean it.
      screensEn.forEach((item, index) => {
        if (index !== 0) item.parentElement.removeChild(item);
        else {
          item.querySelector('input').value = '';
          item.querySelector('select').value = '';
        }
      });
    }

    otherItemsPercent.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]');
      if (check.checked) check.checked = '';
    });

    otherItemsNumber.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]');
      if (check.checked) check.checked = '';
    });

    total_PriceLayoutRu.value = appData.screenPrice;
    total_PriceLayoutEn.value = appData.screenPrice;
    totalCountOther_priceAddServiceRu.value = appData.servicePricesPercent + appData.servicePricesNumber;
    totalCountOther_priceAddServiceEn.value = appData.servicePricesPercent + appData.servicePricesNumber;
    fullTotalCount_fullPriceRu.value = appData.fullPrice;
    fullTotalCount_fullPriceEn.value = appData.fullPrice;
    totalCountRollbackRu.value = appData.servicePercentPrice;
    totalCountRollbackEn.value = appData.servicePercentPrice;
    totalCount_numberOfScreensRu.value = appData.screensTotalNumber;
    totalCount_numberOfScreensEn.value = appData.screensTotalNumber;

    let cmsOptionsRu = document.querySelectorAll('.hidden-cms-variants')[0];
    let cmsOptionsEn = document.querySelectorAll('.hidden-cms-variants')[1];

    let cmsOtherOptionsInputRu = document.getElementById('cms-other-input-ru');
    let cmsOtherOptionsInputEn = document.getElementById('cms-other-input-en');

    cmsOtherOptionsInputRu.value = '';
    cmsOptionsRu.style.display = 'none';
    cmsOtherOptionsInputRu.disabled = false;

    let cmsOtherOptionsRu = cmsOptionsRu.querySelector('.main-controls__input');
    let cmsOtherOptionsEn = cmsOptionsEn.querySelector('.main-controls__input');

    cmsOtherOptionsRu.style.display = 'none';
    cmsOtherOptionsEn.style.display = 'none';

    document.getElementById('cms-select-ru').selectedIndex = 0;
    document.getElementById('cms-select-en').selectedIndex = 0;

    cmsOtherOptionsInputEn.value = '';
    cmsOptionsEn.style.display = 'none';
    cmsOtherOptionsInputEn.disabled = false;

    inputRange.disabled = false;
    inputRange.value = '0';
    inputRangeValue.textContent = '0%';

    inputRangeEn.disabled = false;
    inputRangeEn.value = '0';
    inputRangeValueEn.textContent = '0%';
  },

  logger: function () {
    console.log(this.fullPrice);
    console.log(this.servicePercentPrice);
    console.log(this.screensRu);
    console.log(this.screensEn);
    console.log(this.services);
  },

  fadeInAnim: function (element, displayStyle = 'flex') {
    let opacity = 0;

    // initial display style
    element.style.display = displayStyle;

    const increase = () => {
      opacity += 0.03;
      if (opacity <= 1) {
        element.style.opacity = opacity;
        requestAnimationFrame(increase);
      } else {
        element.style.opacity = 1; // Ensure it ends at 100% opacity
      }
    }
    increase();
  },

  fadeOutAnim: function (element) {
    let opacity = 1;

    const decrease = () => {
      opacity -= 0.03;
      if (opacity >= 0) {
        element.style.opacity = opacity;
        requestAnimationFrame(decrease);
      } else {
        element.style.display = 'none';
      }
    }
    decrease();
  }
};

appData.init();
