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
    { value: ['`'], shiftValue: '~', size: null },
    { value: ['1'], shiftValue: '!', size: null },
    { value: ['2'], shiftValue: '@', size: null },
    { value: ['3'], shiftValue: '#', size: null },
    { value: ['4'], shiftValue: '$', size: null },
    { value: ['5'], shiftValue: '%', size: null },
    { value: ['6'], shiftValue: '^', size: null },
    { value: ['7'], shiftValue: '&', size: null },
    { value: ['8'], shiftValue: '*', size: null },
    { value: ['9'], shiftValue: '(', size: null },
    { value: ['0'], shiftValue: ')', size: null },
    { value: ['-'], shiftValue: '_', size: null },
    { value: ['='], shiftValue: '+', size: null },
    {
      value: ['delete'], size: 'small', special: true, code: 'Backspace',
    },
  ],
  [
    {
      value: ['tab'], size: 'small', special: true, code: 'Tab',
    },
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
    {
      value: ['['], shiftValue: '{', size: null, code: 'BracketLeft',
    },
    {
      value: [']'], shiftValue: '}', size: null, code: 'BracketRight',
    },
    {
      value: ['\\'], shiftValue: '|', size: null, code: 'Backslash',
    },
  ],
  [
    {
      value: ['caps lock'], size: 'medium', special: true, code: 'CapsLock',
    },
    { value: ['a'], size: null },
    { value: ['s'], size: null },
    { value: ['d'], size: null },
    { value: ['f'], size: null },
    { value: ['g'], size: null },
    { value: ['h'], size: null },
    { value: ['j'], size: null },
    { value: ['k'], size: null },
    { value: ['l'], size: null },
    {
      value: [';'], shiftValue: ':', size: null, code: 'Semicolon',
    },
    {
      value: ["'"], shiftValue: '"', size: null, code: 'Quote',
    },
    {
      value: ['return'], size: 'medium', special: true, code: 'Enter',
    },
  ],
  [
    {
      value: ['shift'], size: 'big', special: true, code: 'ShiftLeft',
    },
    { value: ['z'], size: null },
    { value: ['x'], size: null },
    { value: ['c'], size: null },
    { value: ['v'], size: null },
    { value: ['b'], size: null },
    { value: ['n'], size: null },
    { value: ['m'], size: null },
    {
      value: [','], shiftValue: '<', size: null, code: 'Comma',
    },
    {
      value: ['.'], shiftValue: '>', size: null, code: 'Period',
    },
    {
      value: ['/'], shiftValue: '?', size: null, code: 'Slash',
    },
    {
      value: ['shift'], size: 'big', special: true, code: 'ShiftRight',
    },
  ],
  [
    {
      value: ['control'], size: null, special: true, code: 'ControlLeft',
    },
    {
      value: ['option'], size: null, special: true, code: 'AltLeft',
    },
    {
      value: ['command'], size: 'extra-small', special: true, code: 'MetaLeft',
    },
    {
      value: ['space'], size: 'extra-big', special: true, code: 'Space',
    },
    {
      value: ['command'], size: 'extra-small', special: true, code: 'MetaRight',
    },
    {
      value: ['option'], size: null, special: true, code: 'AltRight',
    },
  ],
];

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
const subRowKeys = [
  { value: '<i class="fa-solid fa-caret-up"></i>', code: 'ArrowUp' },
  { value: '<i class="fa-solid fa-caret-left"></i>', code: 'ArrowLeft' },
  { value: '<i class="fa-solid fa-caret-down"></i>', code: 'ArrowDown' },
  { value: '<i class="fa-solid fa-caret-right"></i>', code: 'ArrowRight' },
];

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

function highlightElement(element) {
  element.classList.add('keyboard__key--active');
  setTimeout(() => {
    element.classList.remove('keyboard__key--active');
  }, 300);
}

document.addEventListener('keydown', (event) => {
  const keyPressed = event.key;
  rows.forEach((row) => {
    row.forEach((key) => {
      if (key.code === event.code || key.value.includes(keyPressed)) {
        const rowIndex = rows.indexOf(row);
        const keyIndex = row.indexOf(key);
        const keyElement = keyboard.children[rowIndex].children[keyIndex];
        highlightElement(keyElement);
      }
    });
  });
  subRowKeys.forEach((subKey) => {
    if (subKey.code === event.code) {
      const subIndex = subRowKeys.indexOf(subKey);
      const subRowKeyElement = subRow.children[subIndex];
      highlightElement(subRowKeyElement);
    }
  });
});
