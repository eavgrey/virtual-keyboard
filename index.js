import { rows, subRowKeys } from './keys.js';

const body = document.querySelector('body');

const textDisplay = document.createElement('div');
textDisplay.classList.add('text-display');
const textArea = document.createElement('textarea');
textArea.setAttribute('name', 'text-display');
textArea.setAttribute('id', 'text-display');
textArea.classList.add('text-display__area');
textDisplay.appendChild(textArea);
body.appendChild(textDisplay);

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');

rows.forEach((row) => {
  const elem = document.createElement('div');
  elem.classList.add('keyboard__row');
  row.forEach((key) => {
    const keyElem = document.createElement('button');
    keyElem.classList.add('keyboard__key');
    [keyElem.innerHTML] = key.value;
    if (key.shiftValue) {
      const secKeyValue = document.createElement('span');
      secKeyValue.classList.add('keyboard__key--second-value');
      [secKeyValue.innerHTML] = key.shiftValue;
      keyElem.appendChild(secKeyValue);
    }
    if (key.size !== null) {
      keyElem.classList.add(`keyboard__key--${key.size}`);
    }
    elem.appendChild(keyElem);
    if (key.special) {
      keyElem.classList.add('keyboard__key--special');
    }
  });
  keyboard.appendChild(elem);
});

const subRow = document.createElement('div');
subRow.classList.add('keyboard__sub-row');

subRowKeys.forEach((subKey) => {
  const subRowKey = document.createElement('button');
  subRowKey.classList.add('keyboard__key', 'sub-row__key');
  if (subKey.code === 'ArrowUp') {
    subRowKey.classList.add('sub-row__key--first');
  }
  subRowKey.innerHTML = subKey.value;
  subRow.appendChild(subRowKey);
});

const lastRow = keyboard.lastChild;
lastRow.appendChild(subRow);

body.appendChild(keyboard);

const keys = document.querySelectorAll('.keyboard__key');

export {
  subRow, keyboard, keys, textArea,
};
