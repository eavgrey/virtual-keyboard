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
const subRowKeys = [
  { value: '↑', code: 'ArrowUp' },
  { value: '←', code: 'ArrowLeft' },
  { value: '↓', code: 'ArrowDown' },
  { value: '→', code: 'ArrowRight' },
];

export { subRowKeys, rows };
