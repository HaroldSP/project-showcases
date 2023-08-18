'use strict';

// Implement data validation in the input fields using the blur event (when the input loses focus) and replace them with correct data if needed according to the rules:
// All characters except valid ones should be removed.
// Multiple consecutive spaces or dashes should be replaced with a single one.
// Spaces and dashes at the beginning and end of the value should be removed.
// For type=text fields, the first letter of each word should be capitalized, while the rest should be in lowercase.

const formValidationPlus = () => {
  const calcDiv = document.querySelector('.calc-block')
  const calcInputs = calcDiv.querySelectorAll('input[type="text"]');

  calcInputs.forEach(calcInput => {
    calcInput.addEventListener('blur', (e) => {
      const inputValue = e.target.value;
      const numericValue = inputValue.replace(/[\D]+/g, '');
      const trimmedValue = numericValue.trim();
      e.target.value = trimmedValue;
    })
  })

  // //////////////////////////////////////////////////                    forms                             //////////////////////////////////////////////////////////////

  // //////////////////////////////////////////////////                    new listners before submitting forms                             //////////////////////////////////////////////////////////////

  const forms = document.querySelectorAll('[name="user_form"]');
  const textInputs = document.querySelectorAll('input[name="user_name"]');
  const placeholderInputs = document.querySelectorAll('input[placeholder="Ваше сообщение"]');
  const telInputs = document.querySelectorAll('input[type="tel"]');
  const emailInputs = document.querySelectorAll('input[type="email"]');

  // There are cases when there is a space and a hyphen at the end simultaneously, and sometimes the construction " - " appears.
  // You can continue processing, for example, just like in the case of "tel".

  textInputs.forEach(textInput => {
    textInput.addEventListener('blur', () => {
      let inputValue = textInput.value;
      inputValue = inputValue.replace(/(^\s+|\s+$)|(^-+|-+$)/g, '');
      inputValue = inputValue.replace(/[-]+/g, '-');
      inputValue = inputValue.replace(/[\s]+/g, ' ');
      inputValue = inputValue.replace(/[^а-яА-я\s-]/g, '');
      inputValue = inputValue.split(' ');
      inputValue = inputValue.map((word) => {
        const firstLetter = word.charAt(0).toUpperCase();
        const restOfLetters = word.slice(1).toLowerCase();
        return firstLetter + restOfLetters;
      });

      inputValue = inputValue.join(' ');
      textInput.value = inputValue;
    });
  });

  placeholderInputs.forEach(placeholderInput => {
    placeholderInput.addEventListener('blur', () => {
      let inputValue = placeholderInput.value;
      inputValue = inputValue.replace(/(^\s+|\s+$)|(^-+|-+$)/g, '');
      inputValue = inputValue.replace(/[-]+/g, '-');
      inputValue = inputValue.replace(/[\s]+/g, ' ');
      inputValue = inputValue.replace(/[^а-яА-я\s-]/g, '');
      placeholderInput.value = inputValue;
    });
  });

  telInputs.forEach(telInput => {
    telInput.addEventListener('blur', () => {
      let inputValue = telInput.value;
      inputValue = inputValue.replace(/(^\s+|\s+$)|(^-+|-+$)/g, '');
      inputValue = inputValue.replace(/[-]+/g, '-');
      inputValue = inputValue.replace(/[\s]+/g, '');
      inputValue = inputValue.replace(/[^\d()+-]/g, '');
      inputValue = inputValue.replace(/(^-+|-+$)/g, '');
      inputValue = inputValue.replace(/[-]+/g, '-');
      telInput.value = inputValue;
    });
  });

  emailInputs.forEach(emailInput => {
    emailInput.addEventListener('blur', () => {
      let regexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/gi;
      let inputValue = emailInput.value;
      inputValue = inputValue.replace(/(^\s+|\s+$)|(^-+|-+$)/g, '');
      inputValue = inputValue.replace(/[-]+/g, '-');

      if (!regexp.test(inputValue)) {
        alert('Введите корректный email !');
        inputValue = '';
        emailInput.value = inputValue;
      } else {
        inputValue = inputValue.replace(/(^-+|-+$)/g, '');
        inputValue = inputValue.replace(/[-]+/g, '-');
        emailInput.value = inputValue;
      }
    });
  });

  // //////////////////////////////////////////////////                   submit prepared forms                             //////////////////////////////////////////////////////////////

  // Revalidation is necessary, as the first click outside the input can directly be on the submit button.

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let isError = false;
      const textInputs = form.querySelectorAll('input[type="text"]');
      const telInputs = form.querySelectorAll('input[type="tel"]');
      const emailInputs = form.querySelectorAll('input[type="email"]');
      const placeholderInputs = form.querySelectorAll('input[placeholder="Ваше сообщение"]');

      textInputs.forEach(textInput => {
        // const regeExpShort = /[^а-яА-я]/gi;
        const regeExpLong = /^[а-яА-я]+([ -][а-яА-я]+)*$/gi;
        if ((regeExpLong.test(textInput.value)) && (textInput.value !== '')) console.log('В инпуте только кириллица');
        else {
          alert('В инпуте должна быть только кириллица'); // error message example;
          isError = true;
        }
      });

      placeholderInputs.forEach(placeholderInput => {
        const regeExpLong = /^[а-яА-я]+([ -][а-яА-я]+)*$/gi;
        if ((regeExpLong.test(placeholderInput.value)) && (placeholderInput.value !== '')) console.log('В инпуте только кириллица');
        else isError = true;
      });

      telInputs.forEach(telInput => {
        // const regeExpShort = /[^\d]/gi;
        const regeExpLong = /[^\d()+-]/g;
        if ((!regeExpLong.test(telInput.value)) && (telInput.value !== '')) console.log('В инпуте только цифры');
        else isError = true;
      });

      emailInputs.forEach(emailInput => {
        // const regeExpShort = /^[^\s@]+@[^\s@]+\.[^\s@]+$/gi;
        const regeExpLong = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/gi; // универсальная проверка корректности почтового адреса
        if ((regeExpLong.test(emailInput.value)) && (emailInput.value !== '')) console.log('В инпуте корректный email');
        else isError = true;
      });

      if (!isError) {
        form.reset();
        alert('Данные отправлены');
      }
    })
  })
};

export default formValidationPlus;
