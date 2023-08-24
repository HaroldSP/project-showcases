'use strict';
const sendForm = ({ formId }) => {
  // //////////////////////////////////////////////////                    forms                             //////////////////////////////////////////////////////////////

  // //////////////////////////////////////////////////                    new listners before submitting forms                             //////////////////////////////////////////////////////////////

  const textInputs = document.querySelectorAll('input[name="fio"]');
  const telInputs = document.querySelectorAll('input[name="tel"]');
  const modalOverlay = document.querySelector('.modal-overlay');
  const modalCallMe = document.querySelector('.modal-callback');

  textInputs.forEach(textInput => {
    textInput.addEventListener('blur', () => {
      let inputValue = textInput.value;
      inputValue = inputValue.replace(/(^\s+|\s+$)|(^-+|-+$)/g, '');
      inputValue = inputValue.replace(/[-]+/g, '-');
      inputValue = inputValue.replace(/[\s]+/g, ' ');
      inputValue = inputValue.replace(/[^а-яА-яёЁ\s-]/g, '');
      inputValue = inputValue.split(' ');
      inputValue = inputValue.map((word) => {
        const firstLetter = word.charAt(0).toUpperCase();
        const restOfLetters = word.slice(1).toLowerCase();

        return firstLetter + restOfLetters;
      });

      inputValue = inputValue.join(' ');
      textInput.value = inputValue;
    });

    // double check
    textInput.addEventListener('input', (e) => {
      const regeExpNot = /[^а-яА-ЯёЁ\s-]/gi;
      e.target.value = e.target.value.replace(regeExpNot, '');
    })
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

    // double check
    telInput.addEventListener('input', (e) => {
      const regeExpNot = /[^\d()-]+/g;
      e.target.value = e.target.value.replace(regeExpNot, '');
    })
  });

  // //////////////////////////////////////////////////                   submit prepared forms                             //////////////////////////////////////////////////////////////

  const form = document.getElementById(formId);
  const sendBtn = document.querySelector('.button.btn.feedback');
  const defaultText = 'Отправить'
  const errorText = 'Ошибка...';
  const sendingText = 'Отправляем...';
  const successText = 'Отправлено!';

  const validate = (list) => {
    let success = true;

    const textInputs = form.querySelectorAll('input[name="fio"]');
    const telInputs = form.querySelectorAll('input[name="tel"]');

    textInputs.forEach(textInput => {
      const regeExpLong = /^[а-яА-яёЁ]{2,}(( |-| -|- | - )?([а-яА-яёЁ]{2,})*)*$/gi;
      if ((regeExpLong.test(textInput.value)) && (textInput.value !== '')) console.log('В инпуте только кириллица');
      else {
        textInput.style.border = '2px solid red';
        setTimeout(() => { textInput.style.border = ''; }, 3000);
        success = false;
      }
    });

    telInputs.forEach(telInput => {
      const regeExpLongSixD = /^[()\d+-]{6,}$/g;
      if ((regeExpLongSixD.test(telInput.value)) && (telInput.value !== '')) console.log('В инпуте только цифры');
      else {
        telInput.style.border = '2px solid red';
        setTimeout(() => { telInput.style.border = ''; }, 3000);
        success = false;
      }
    });

    return success;
  };

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
        // 'Access-Control-Allow-Origin': 'http://localhost:8080',
        // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        // 'Access-Control-Allow-Headers': 'Content-Type'
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res;
      })
      .then(res => {
        console.log('Response:', res);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll('input');
    const formData = new FormData(form);
    let formBody = {};

    sendBtn.value = sendingText;

    formData.forEach((val, key) => {
      if (val) formBody[key] = val;
    });

    if (validate(formElements)) {
      sendData(formBody).then(data => {
        setTimeout(() => {
          sendBtn.value = successText;
        }, 1);

        setTimeout(() => {
          sendBtn.value = defaultText;
        }, 3000);

        setTimeout(() => {
          modalOverlay.style.display = 'none';
          modalCallMe.style.display = 'none'; ;
        }, 3000);

        formElements.forEach(input => {
          input.value = ''
        });
      })
        .catch(error => {
          sendBtn.value = errorText;
          console.error(error);
        })
    } else {
      sendBtn.value = defaultText;
      // form.reset(); // uncomment to clear form
    };
  };

  try {
    if (!form) {
      throw new Error('Верните форму на место');
    }

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;
