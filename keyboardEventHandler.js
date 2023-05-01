import { rows, subRowKeys } from './keys.js';
import {
  keyboard, subRow, keys, textArea,
} from './index.js';

import Functionality from './functionalityKeys.js';

const output = new Functionality(textArea);

function highlightElement(element) {
  element.classList.add('keyboard__key--active');
}

function disHiglightElement(element) {
  element.classList.remove('keyboard__key--active');
}

function highlightOnClick(element) {
  element.classList.add('keyboard__key--active');
}

function disHighlightOnClick(element) {
  element.classList.remove('keyboard__key--active');
}

function handleKeyboardEvent(event, isActive) {
  const keyPressed = event.key;
  rows.forEach((row) => {
    row.forEach((key) => {
      if (key.code === event.code || key.value.includes(keyPressed)) {
        const rowIndex = rows.indexOf(row);
        const keyIndex = row.indexOf(key);
        const keyElement = keyboard.children[rowIndex].children[keyIndex];
        if (isActive) {
          highlightElement(keyElement);
        } else {
          disHiglightElement(keyElement);
        }
      }
    });
  });
  subRowKeys.forEach((subKey) => {
    if (subKey.code === event.code) {
      const subIndex = subRowKeys.indexOf(subKey);
      const subRowKeyElement = subRow.children[subIndex];
      if (isActive) {
        highlightElement(subRowKeyElement);
      } else {
        disHiglightElement(subRowKeyElement);
      }
    }
  });
}

document.addEventListener('keydown', (event) => {
  handleKeyboardEvent(event, true);
});

document.addEventListener('keyup', (event) => {
  handleKeyboardEvent(event, false);
});

function handleSpecialFunctionality(funcKey) {
  switch (funcKey.firstChild.data) {
    case 'delete':
      output.deleteSymbol();
      break;
    case 'tab':
      output.tab();
      break;
    case 'return':
      output.enter();
      break;
    case 'shift':
      break;
    case 'space':
      output.space();
      break;
    case '↑':
      output.arrowUp();
      break;
    case '←':
      output.arrowLeft();
      break;
    case '↓':
      output.arrowDown();
      break;
    case '→':
      output.arrowRight();
      break;
    default:
  }
}

function handleKeyClick(e) {
  const { childNodes: [node] } = e.target;
  const value = node.nodeValue;
  const clickedKey = e.target;
  if (!clickedKey.classList.contains('keyboard__key--special')) {
    textArea.value += value;
  } else {
    handleSpecialFunctionality(clickedKey);
  }
}

keys.forEach((key) => {
  window.addEventListener('keydown', () => { textArea.focus(); });
  key.addEventListener('click', handleKeyClick);
  key.addEventListener('click', () => { textArea.focus(); });
  key.addEventListener('mousedown', () => highlightOnClick(key));
  key.addEventListener('mouseup', () => disHighlightOnClick(key));
});
