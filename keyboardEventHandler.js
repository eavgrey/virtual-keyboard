import { rows, subRowKeys } from './keys.js';
import {
  keyboard, subRow, keys, textArea,
} from './index.js';

function highlightElement(element) {
  element.classList.add('keyboard__key--active');
}

function disHiglightElement(element) {
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
        disHiglightElement(highlightElement);
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

keys.forEach((key) => {
  key.addEventListener('click', (e) => {
    const clickedKey = e.target;
    const value = clickedKey.childNodes[0].nodeValue;
    if (clickedKey.classList.contains('keyboard__key--special')) {
      /// /run function with special specialFunctionality()
    } else {
      textArea.value += value;
    }
  });
});
