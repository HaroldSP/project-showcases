'use strict';

// 1) Allow only digit input in the calculator:
// After execution, it's necessary to check the functionality of SELECT - when choosing any value, the option text should be displayed.

// 2) On our page, we have 3 forms (first screen, last screen, and modal window).
// It's necessary to validate (check the input value for permissible characters) the input fields of all forms:

// For input fields with type=text and placeholder="Your message", allow only Cyrillic characters in any case, hyphens, and spaces.
// For input fields with type=email, allow only Latin characters in any case, numbers, and special characters: @ - _ . ! ~ * '
// (At symbol, Hyphen, Underscore, Period, Exclamation mark, Tilde, Asterisk, Single quote)
// For input fields with type=tel, allow only digits, parentheses, and hyphens.

const formValidation = () => {
  const calcDiv = document.querySelector('.calc-block')
  const calcInputs = calcDiv.querySelectorAll('input[type="text"]');

  calcInputs.forEach(calcInput => {
    calcInput.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D+/g, '');
    })
  })

  const forms = document.querySelectorAll('[name="user_form"]');

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
        const regeExpLong = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/gi; // Universal email address validation
        if ((regeExpLong.test(emailInput.value)) && (emailInput.value !== '')) console.log('В инпуте корректный email');
        else isError = true;
      });

      if (!isError) {
        form.reset();
        alert('Данные отправлены');
      }
    })
  })

  console.log(forms[1])
};

export default formValidation;
