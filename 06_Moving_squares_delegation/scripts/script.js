'use strict';

const resetBtn = document.querySelector('.btn-reset');
const blocks = document.querySelectorAll('.block');

// dd a listener to the entire element
const container = document.querySelector('.square-body');
container.addEventListener('click', handleBlockClick);

// main func
function handleBlockClick(event) {
  // check click btn
  const clickedArrow = event.target.closest('.arrow');
  if (!clickedArrow) return;

  // The clicked arrow has a class list, in which there are two classes. The second one indicates the direction.
  const direction = clickedArrow.classList[1];

  // Find the nearest block to the clicked arrow and its number.
  const block = event.target.closest('.block');
  const blockNumber = block.querySelector('.block-number');

  // Convert the NodeList of blocks into a regular array to use indexOf() and find the index of the clicked block.
  const currentIndex = Array.from(blocks).indexOf(block);

  // Depending on the clicked arrow, determine the index of the block to jump to.
  let targetIndex;
  if (direction === 'left') {
    targetIndex = currentIndex - 1;
  } else if (direction === 'right') {
    targetIndex = currentIndex + 1;
  } else if (direction === 'top') {
    targetIndex = currentIndex - 5;
  } else if (direction === 'bottom') {
    targetIndex = currentIndex + 5;
  }

  // check edges
  if (targetIndex < 0 || targetIndex >= blocks.length) return;

  const targetBlock = blocks[targetIndex];
  const targetBlockNumber = targetBlock.querySelector('.block-number');

  // switch numbers
  const temp = blockNumber.textContent;
  blockNumber.textContent = targetBlockNumber.textContent;
  targetBlockNumber.textContent = temp;
}

resetBtn.addEventListener('click', () => {
  blocks.forEach((block, index) => {
    const blockNumber = block.querySelector('.block-number');
    blockNumber.textContent = index + 1;
  });
});
