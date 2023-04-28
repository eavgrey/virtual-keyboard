const body = document.querySelector("body");

const textDisplay = document.createElement("div");
textDisplay.classList.add("text-display");
const textArea = document.createElement("textarea");
textArea.setAttribute("name", "text-display");
textArea.setAttribute("id", "text-display");
textArea.classList.add("text-display__area");
textDisplay.appendChild(textArea);
body.appendChild(textDisplay);

const keyboard = document.createElement("div");
keyboard.classList.add("keyboard");

const rows = [
  ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "delete"],
  ["tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"],
  [
    "caps lock",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    ";",
    "'",
    "return",
  ],
  ["shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "shift"],
  ["fn", "control", "option", "command", "space", "command", "option"],
];

for (let i = 0; i < rows.length; i++) {
  const row = document.createElement("div");
  row.classList.add("keyboard__row");
  for (let j = 0; j < rows[i].length; j++) {
    const key = document.createElement("button");
    key.classList.add("keyboard__key");
    key.innerHTML = rows[i][j];
    if (
      rows[i][j] === "delete" ||
      rows[i][j] === "tab" ||
      rows[i][j] === "caps lock" ||
      rows[i][j] === "return" ||
      rows[i][j] === "shift" ||
      rows[i][j] === "fn" ||
      rows[i][j] === "control" ||
      rows[i][j] === "option" ||
      rows[i][j] === "command" ||
      rows[i][j] === "space"
    ) {
      key.classList.add(`keyboard__key--${rows[i][j].replace(" ", "-")}`);
    }
    row.appendChild(key);
  }
  keyboard.appendChild(row);
}

const subRow = document.createElement("div");
subRow.classList.add("keyboard__sub-row");
const subRowKeys = [
  '<i class="fa-solid fa-caret-up"></i>',
  '<i class="fa-solid fa-caret-left"></i>',
  '<i class="fa-solid fa-caret-down"></i>',
  '<i class="fa-solid fa-caret-right"></i>',
];
for (let k = 0; k < subRowKeys.length; k++) {
  const subRowKey = document.createElement("button");
  subRowKey.classList.add("keyboard__key", "sub-row__key");
  if (k === 0) {
    subRowKey.classList.add("sub-row__key--first");
  }
  subRowKey.innerHTML = subRowKeys[k];
  subRow.appendChild(subRowKey);
}
const lastRow = keyboard.lastChild;
lastRow.appendChild(subRow);

body.appendChild(keyboard);
