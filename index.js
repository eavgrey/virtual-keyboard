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

const rows = [
  [
    { value: ['`', '~'], size: null },
    { value: ['1', '!'], size: null },
    { value: ['2', '@'], size: null },
    { value: ['3', '#'], size: null },
    { value: ['4', '$'], size: null },
    { value: ['5', '%'], size: null },
    { value: ['6', '^'], size: null },
    { value: ['7', '&'], size: null },
    { value: ['8', '*'], size: null },
    { value: ['9', '('], size: null },
    { value: ['0', ')'], size: null },
    { value: ['-', '_'], size: null },
    { value: ['=', '+'], size: null },
    { value: ['delete'], size: 'small', special: true },
  ],
  [
    { value: ['tab'], size: 'small', special: true },
    { value: ['q'], size: null },
    { value: ['w'], size: null },
    { value: ['e'], size: null },
    { value: ['r'], size: null },
    { value: ['t'], size: null },
    { value: ['y'], size: null },
    { value: ['u'], size: null },
    { value: ['i'], size: null },
    { value: ['o'], size: null },
    { value: ['p'], size: null },
    { value: ['[', '{'], size: null },
    { value: [']', '}'], size: null },
    { value: ['\\', '|'], size: null },
  ],
  [
    { value: ['caps lock'], size: 'medium', special: true },
    { value: ['a'], size: null },
    { value: ['s'], size: null },
    { value: ['d'], size: null },
    { value: ['f'], size: null },
    { value: ['g'], size: null },
    { value: ['h'], size: null },
    { value: ['j'], size: null },
    { value: ['k'], size: null },
    { value: ['l'], size: null },
    { value: [';', ':'], size: null },
    { value: ["'", '"'], size: null },
    { value: ['return'], size: 'medium', special: true },
  ],
  [
    { value: ['shift'], size: 'big', special: true },
    { value: ['z'], size: null },
    { value: ['x'], size: null },
    { value: ['c'], size: null },
    { value: ['v'], size: null },
    { value: ['b'], size: null },
    { value: ['n'], size: null },
    { value: ['m'], size: null },
    { value: [',', '<'], size: null },
    { value: ['.', '>'], size: null },
    { value: ['/', '?'], size: null },
    { value: ['shift'], size: 'big', special: true },
  ],
  [
    { value: ['fn'], size: null, special: true },
    { value: ['control'], size: null, special: true },
    { value: ['option'], size: null, special: true },
    { value: ['command'], size: 'extra-small', special: true },
    { value: ['space'], size: 'extra-big', special: true },
    { value: ['command'], size: 'extra-small', special: true },
    { value: ['option'], size: null, special: true },
  ],
];
rows.forEach((row) => {
  const elem = document.createElement('div');
  elem.classList.add('keyboard__row');
  row.forEach((key) => {
    const keyElem = document.createElement('button');
    keyElem.classList.add('keyboard__key');
    [keyElem.innerHTML] = key.value;
    if (key.value.length > 1) {
      const secKeyValue = document.createElement('span');
      secKeyValue.classList.add('keyboard__key--second-value');
      const [keyValue] = key.value[1];
      secKeyValue.innerHTML = keyValue;
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
const subRowKeys = [
  '<i class="fa-solid fa-caret-up"></i>',
  '<i class="fa-solid fa-caret-left"></i>',
  '<i class="fa-solid fa-caret-down"></i>',
  '<i class="fa-solid fa-caret-right"></i>',
];

for (let k = 0; k < subRowKeys.length; k += 1) {
  const subRowKey = document.createElement('button');
  subRowKey.classList.add('keyboard__key', 'sub-row__key');
  if (k === 0) {
    subRowKey.classList.add('sub-row__key--first');
  }
  subRowKey.innerHTML = subRowKeys[k];
  subRow.appendChild(subRowKey);
}
const lastRow = keyboard.lastChild;
lastRow.appendChild(subRow);

body.appendChild(keyboard);
