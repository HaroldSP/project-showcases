'use strict';

/*
Implement a currency converter application in a separate repository.
Use the API - https://exchangeratesapi.io/ to fetch the value of the dollar and euro (it's not obligatory to use this API, other options are available).
The page should have a select or radio buttons for choosing currency - USD or EUR.
Add an input field on the page where users can input the amount of currency and get the equivalent amount in rubles.
Also, provide the option to convert back from rubles to the chosen currency.
*/

// Function to hide all answer blocks (reset)
const hideAllResponseBlocks = () => {
  const responseBlocksArray = Array.from(document.querySelectorAll('div.dialog__response-block'))
  responseBlocksArray.forEach(block => block.style.display = 'none')
}

// Function to display the answer block with a message
const showResponseBlock = (blockSelector, msgText, spanSelector) => {
  hideAllResponseBlocks()
  document.querySelector(blockSelector).style.display = 'block'
  if (spanSelector) {
    document.querySelector(spanSelector).textContent = msgText
  }
}

// Function to display the block with an error message
const showError = msgText => showResponseBlock('.dialog__response-block_error', msgText, '#error')

// Function to display the block with filtered results
const showResults = msgText => showResponseBlock('.dialog__response-block_ok', msgText, '#ok')

// Function to display the block with a message of no results
const showNoResults = () => showResponseBlock('.dialog__response-block_no-results')

const showResultMain = (type1, type2, values) => {
  try {
    let myHeaders = new Headers();
    myHeaders.append('apikey', 'Tv3T2mrEWyGoyJ6LMFpBlEMNNU8ivK7R');

    let requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };

    fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${type2}&from=${type1}&amount=${values}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result.result);
        let resultWithCurrency = result.result + type2;
        showResults(resultWithCurrency);
        filterButton.textContent = 'Конвертировать';
      })
      .catch(error => console.log('error', error));
  } catch (e) {
    // Displaying an error message
    showError(`Ошибка: ${e}`)
  }
}

// Getting the button element
const filterButton = document.querySelector('#filter-btn')

// Handling the click event
filterButton.addEventListener('click', e => {
  // Accessing input elements
  const typeInput1 = document.querySelector('#type1')
  const typeInput2 = document.querySelector('#type2')
  const dataInput = document.querySelector('#data')

  filterButton.textContent = 'Ожидайте...';

  // Checking if the input field is not empty
  if (dataInput.value === '') {
    // Applying custom validation (if input is invalid) and displaying the "No results" block
    dataInput.setCustomValidity('Поле не должно быть пустым!')
    showNoResults()
  } else {
    dataInput.setCustomValidity('')
    e.preventDefault()
    showResultMain(typeInput1.value.trim(), typeInput2.value.trim(), dataInput.value.trim())
  }
})
